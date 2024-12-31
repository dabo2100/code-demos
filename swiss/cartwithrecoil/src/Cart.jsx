import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { $Cart } from './store'

export default function Cart() {
    const [cart, setCart] = useRecoilState($Cart);
    const [total, setTotal] = useState(0);

    const increment = (id) => {
        let oCart = [...cart];
        let objIndex = oCart.findIndex((el) => { return el.id == id });
        let obj = { ...oCart[objIndex] };
        obj.qty++;
        oCart[objIndex] = obj;
        setCart(oCart);
    }

    const decrement = (id) => {
        let oCart = [...cart];
        let objIndex = oCart.findIndex((el) => { return el.id == id });
        let obj = { ...oCart[objIndex] };
        if (obj.qty > 1) {
            obj.qty--;
            oCart[objIndex] = obj;
        } else {
            oCart.splice(objIndex, 1);
        }

        setCart(oCart);
    }

    const handlePrint = () => {
        window.print();
    }

    useEffect(() => {
        let total = cart.reduce((acc, el) => { return acc += el.qty * el.price; }, 0);
        setTotal(Math.ceil(total));
    }, [cart])

    return (
        <div className='col-4 bg-info overflow-auto h-100 Cart'>
            <button onClick={handlePrint} className='btn btn-primary col-12 hidePrint'>Print</button>
            <table className='col-12 table table-bordered'>
                <thead>
                    <tr>
                        <th>-</th>
                        <th className='hidePrint'>Item Img</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Qty</th>
                        <th>Item Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((el, index) => {
                            return (
                                <tr key={el.id}>
                                    <td>{index + 1}</td>
                                    <td className='hidePrint'><img src={el.img} height={50} /></td>
                                    <td>{el.name}</td>
                                    <td>{el.price} </td>
                                    <td>
                                        <div className='col-12 d-flex align-items-center justify-content-center gap-2'>
                                            <button className='btn btn-danger hidePrint' onClick={() => { decrement(el.id) }} >-</button>
                                            {el.qty}
                                            <button className='btn btn-success hidePrint' onClick={() => { increment(el.id) }}>+</button>
                                        </div>
                                    </td>
                                    <td>{el.price * el.qty} $</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={4}>Total</th>
                        <th colSpan={2}>{total} $</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
