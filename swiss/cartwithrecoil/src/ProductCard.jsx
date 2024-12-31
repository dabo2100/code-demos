import React from 'react'
import { useRecoilState } from 'recoil'
import { $Cart } from './store'

export default function ProductCard(props) {
    const [cart, setCart] = useRecoilState($Cart);

    const addToCart = () => {
        let oCart = [...cart];
        let objIndex = oCart.findIndex((el) => { return el.id == props.id });
        if (objIndex == -1) {
            let obj = {
                id: props.id,
                name: props.cat,
                price: props.price,
                img: props.img,
                qty: 1,
            }
            oCart.push(obj);
        } else {
            let obj = { ...oCart[objIndex] };
            +obj.qty++;
            oCart[objIndex] = obj;
        }
        setCart(oCart);
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.img} style={{ width: "100%", height: "18rem", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.cat}</h5>
                <p className="card-text">{props.price} $</p>
                <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    )
}
