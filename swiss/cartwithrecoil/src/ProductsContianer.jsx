import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useRecoilState } from 'recoil'
import { $Products } from './store'
import axios from 'axios';

export default function ProductsContianer() {
    const [product, setProducts] = useRecoilState($Products);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            console.log(res.data[0]);
            setProducts(res.data);
        })
    }, [])
    return (
        <div className='col-8 bg-danger overflow-auto h-100 ProductsContainer d-flex flex-wrap gap-3 hidePrint'>
            {
                product.map((el, index) => {
                    return <ProductCard key={el.id} id={el.id} price={el.price} cat={el.category} img={el.image} />
                })
            }
        </div>
    )
}
