import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  let domain = "http://localhost:1337";
  let endpoint = "/api/products";
  let url = domain + endpoint;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(url, {
        params: {
          populate: "*",
        },
      })
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);
      });
  }, []);
  return (
    <div className="container flex flex-wrap">
      {products.map((el) => (
        <ProductCard
          key={el.documentId}
          price={el.price}
          qty={el.stockQty}
          name={el.name}
          imgUrl={domain + el.imgUrl.url}
          id={el.documentId}
        />
      ))}
    </div>
  );
}
