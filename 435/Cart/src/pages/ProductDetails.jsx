import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCart from '../hooks/useCart';
import { useRecoilState, useRecoilValue } from 'recoil';
import { $baseUrl, $Cart } from '../store';

export default function ProductDetails() {
    const url = useRecoilValue($baseUrl)
    const params = useParams();
    const [cart, setCart] = useRecoilState($Cart);
    const addToCart = () => {
        let oCart = [...cart];
        oCart.push(4);
        setCart(oCart);
    }

    const [el, setProduct] = useState({});
    useEffect(() => {
        let id = params.id;
        axios.get(`${url}/api/products/${id}`, {
            params: {
                populate: {
                    product_cover: {
                        populate: "*"
                    },
                    product_category: {
                        populate: "*"
                    }
                }
            }
        }).then((res) => {
            console.log(res.data.data);
            setProduct(res.data.data);
        })
    }, []);
    
    return (
        <div className='col-12 d-flex flex-wrap'>
            {
                el.product_cover &&
                <>
                    <img src={`${url}` + el.product_cover.url} alt="" />
                    <table className='table table-dark table-bordered'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <td>{el.product_name}</td>
                            </tr>
                            <tr>
                                <th>Product Category</th>
                                <td>{el.product_category.cat_name}</td>
                            </tr>
                            <tr>
                                <th>Product Price</th>
                                <td>{el.product_price}</td>
                            </tr>

                        </thead>
                    </table>
                </>
            }

            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}
