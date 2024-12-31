import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { useRecoilState } from 'recoil';
import { $baseUrl, $Cart } from '../store';
import { toast, ToastContainer } from 'react-toastify';
export default function ShopPage() {
    const [url] = useRecoilState($baseUrl);
    const notify = () => toast("Already Added to cart!");
    // How to deal with data
    // get data
    // data fetch
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useRecoilState($Cart);
    const addToCart = (obj) => {
        let oCart = [...cart];
        let isHere = oCart.some((el) => { return el.documentId == obj.documentId })
        !isHere ? oCart.push({ ...obj, qty: 1 }) : notify();
        setCart(oCart);
    }

    useEffect(() => {
        axios.get(`${url}/api/products`, {
            params: {
                populate: "*"
            }
        }).then((res) => {
            console.log(res.data.data);
            setProducts(res.data.data);
        })
    }, [])

    return (
        <div className='col-12 d-flex flex-wrap gap-3 justify-content-center'>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            {
                products.map((el, index) => {
                    return (
                        el.product_stock > 0 &&
                        <div key={el.documentId} className="card" style={{ width: "18rem" }}>
                            <img src={`${url}` + el.product_cover.url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{el.product_name}</h5>
                                <p className="card-text">Price : {el.product_price} $</p>
                                <button onClick={() => addToCart(el)}>Add to cart</button>
                                <Link className="btn btn-primary" to={`product/${el.documentId}`}>Show Details</Link>
                            </div>
                        </div>
                    )
                })
            }
            <h1>Shop Page Products will be here</h1>
        </div>
    )
}
