import axios from "axios";
import { useEffect, useState } from "react"

export default function App() {
  let domainName = "http://localhost:1337";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let endPoint = "/api/products";
    let url = domainName + endPoint;
    axios.get(url, { params: { populate: "*" } }).then((res) => {
      setProducts(res.data.data);
    })
  }, []);


  const handleDelete = (id) => {
    let endPoint = `/api/products/${id}`;
    let url = domainName + endPoint;
    axios.delete(url).then(() => {

    }, []);
  }


  return (
    <div className='App col-12 container d-flex flex-wrap'>
      {
        products.map((el, index) => {
          return (
            <div key={el.documentId} className="col-12 col-md-6 col-lg-3 p-3">
              <div className="card col-12" >
                <img src={domainName + el.product_img.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{el.product_name}</h5>
                  <p className="card-text">${el.product_price}</p>
                  <a href="#" onClick={() => handleDelete(el.documentId)} className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

// http://localhost:1337/api/products?populate=*

// URL
// Query Params
// 
// DomainName/path{endpoint}?name=ahmed&color=red
// https://wa.me
// /1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale