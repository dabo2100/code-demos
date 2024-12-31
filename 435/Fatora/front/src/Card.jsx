import React from 'react'

export default function Card(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.product_img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.product_name}</h5>
                <p className="card-text">price {props.product_price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
