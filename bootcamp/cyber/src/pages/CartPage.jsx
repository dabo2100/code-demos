import { useEffect, useState } from "react"
import { domain } from "../store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthRepo } from "../data/repos/AuthRepo";

export default function CartPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let storageCart = JSON.parse(localStorage.getItem('cart'));
        storageCart && setCart(storageCart);
    }, []);

    useEffect(() => {
        let newTotal = cart.reduce((acc, el) => { return acc + (el.salePrice * el.qty) }, 0);
        setTotal(newTotal);
    }, [cart]);

    const decrmentQty = (index) => {
        let copy = [...cart];
        if (copy[index].qty > 1) {
            copy[index].qty--;
        } else {
            copy.splice(index, 1);
        }
        setCart(copy);
        localStorage.setItem('cart', JSON.stringify(copy));
    }

    const incrementQty = (index) => {
        let copy = [...cart];
        copy[index].qty++;
        setCart(copy);
        localStorage.setItem('cart', JSON.stringify(copy));
    }

    const removeItem = (index) => {
        let copy = [...cart];
        copy.splice(index, 1);
        setCart(copy);
        localStorage.setItem('cart', JSON.stringify(copy));
    }

    const placeOrder = () => {
        let token = sessionStorage.getItem('token') || localStorage.getItem('token');
        if (!token) {
            sessionStorage.setItem('redirect', 'checkout');
            toast.error('Please Sign in or Login to Place Order');
            navigate('/login');
        } else {
            // check token
            AuthRepo.checkToken(token).then((res) => {
                if (res) { navigate('/checkout') }
                else {
                    sessionStorage.setItem('redirect', 'checkout');
                    toast.error('Please Sign in or Login to Place Order');
                    navigate('/login');
                }
            })
        }

    }
    return (
        <div>
            {
                cart.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Item Name</th>
                                    <th>Item Qty</th>
                                    <th>Item Price</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((el, index) => (
                                        <tr key={el.documentId}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={el.coverImg ? `${domain}${el.coverImg.url}` : 'https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png'}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{el.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => decrmentQty(index)}>-</button>
                                                <span className="badge badge-ghost badge-sm">{el.qty}</span>
                                                <button className="btn btn-success" onClick={() => incrementQty(index)}>+</button>
                                            </td>
                                            <td>$ {el.salePrice}</td>
                                            <td>$ {el.salePrice * el.qty}</td>
                                            <th>
                                                <button onClick={() => removeItem(index)} className="bg-red-600 text-white p-2 rounded hover:bg-red-500">del</button>
                                            </th>
                                        </tr>
                                    ))
                                }

                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th colSpan={4}>Total</th>
                                    <th colSpan={2}>$ {total}</th>
                                </tr>
                            </tfoot>
                        </table>
                        <button onClick={placeOrder} className="btn btn-primary">Place Order</button>
                    </div>
                ) : <h1>There are no products in cart</h1>
            }
        </div>
    )
}
