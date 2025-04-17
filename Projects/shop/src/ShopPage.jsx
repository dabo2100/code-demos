import axios from "axios";
import { useEffect, useState } from "react"

export default function ShopPage() {
    const [products, setProducsts] = useState([]);
    useEffect(() => {
        // Make Api Request
        axios.get("https://fakestoreapi.com/products").then((res) => {
            let data = res.data;
            setProducsts(data);
        })
    }, []);

    return (
        <div>
            {
                products.map((el, index) => {
                    return (
                        <div key={index} className="card" >
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
