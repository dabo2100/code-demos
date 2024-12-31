import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { $Cart } from '../store'
import { Link } from 'react-router-dom';

export default function CartPage() {
    const [myCart, setMyCart] = useRecoilState($Cart);
    const incrment = (index) => {
        let oCart = [...myCart];
        let obj = { ...myCart[index] };
        if (obj.qty < obj.product_stock) {
            obj.qty++;
            oCart[index] = obj;
            setMyCart(oCart);
        }
    }
    const decrement = (index) => {
        let oCart = [...myCart];
        let obj = { ...myCart[index] };
        if (obj.qty > 1) {
            obj.qty--;
            oCart[index] = obj;
            setMyCart(oCart);
        }
    }
    useEffect(() => {
        console.log(myCart)
    }, []);
    return (
        <div className='col-12'>
            {
                myCart.length > 0 ? <table className='table table-dark align-middle'>
                    <thead>
                        <tr>
                            <td>-</td>
                            <td>Product Name</td>
                            <td>Product Price</td>
                            <td>Product Qty</td>
                            <td>Product Total</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myCart.map((el, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{el.product_name}</td>
                                        <td>{el.product_price}</td>
                                        <td><button className='btn btn-danger' onClick={() => decrement(index)}>-</button>{el.qty}<button className='btn btn-success' onClick={() => { incrment(index) }}>+</button></td>
                                        <td>{el.qty * el.product_price} egp</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table> : <h1>No Data into cart <Link to="/">Continue shoping</Link></h1>
            }

        </div>
    )
}
