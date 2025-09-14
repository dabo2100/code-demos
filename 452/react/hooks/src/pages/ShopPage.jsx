import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import phone1 from '../assets/iPhone 11.jpg';
import phone2 from '../assets/shopping.webp';
import phone3 from '../assets/download.jpg';
import axios from 'axios';

export default function ShopPage() {
  // let domain = 'https://fakestoreapi.com';
  // let endPoint = '/products';
  // let url = domain + endPoint;

  // Dummy Fake Data
  const [phones, setPhones] = useState([]);
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      setPhones(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="container grid gap-3 grid-cols-3">
      {phones.map((el, index) => {
        return <ProductCard key={index} item={el} />;
      })}
    </div>
  );
}

// props ( Attr -> pass Data to the componenet)
// API [Req - Res]
// GET, POST , PUT/PATCH , DELETE
// RES => Status code => 200, 300, 400, 500
// AJAX , Fetch , Axios (Build Request)
// Postman for testing