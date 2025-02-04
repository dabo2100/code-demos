import axios from "axios"
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function App() {
  const [product, setProducts] = useState([]);
  axios.get("https://fakestoreapi.com/products").then((res) => {
    setProducts(res.data);
  })
  return (
    <div className="App d-flex flex-column container">
      <h1 className="col-12 text-center bg-warning p-3">Shop Products</h1>
      <div className="col-12 d-flex flex-wrap">
        {
          product.map((el, index) => {
            return (
              <ProductCard key={index} productData={el} imgSrc={el.image} price={el.price} />
            )
          })
        }
      </div>
    </div>
  )
}