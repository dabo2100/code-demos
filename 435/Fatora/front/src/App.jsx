import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function App() {
  const domain = 'http://localhost:1337';
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/api/products", {
      params: {
        populate: "*"
      }
    }).then((res) => {
      setProducts(res.data.data);

      console.log();
      // console.log(res)
    })
  }, [])
  return (
    <div className='col-12 App d-flex align-items-center justify-content-center gap-3'>
      {
        products.map((el, index) => {
          return <Card key={index} product_img={domain + el.product_img.url} product_name={el.product_name} product_price={el.product_price} />
        })
      }
    </div>
  )
}
