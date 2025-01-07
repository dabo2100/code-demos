
import styles from "./index.module.css";
import noProduct from "../../assets/app-images/noProduct.png"
export default function ProductCard({name}) {
    return (
        <div className={styles['product-card'] + ' rounded'}>
            <img src={noProduct} />
            <h2>{name}</h2>
            <h3>Apple iPhone 14 Pro 512GB Gold (MQ233)</h3>
            <p>$1437</p>
            <button className="col-12 btn btn-dark"> Add To Cart</button>
        </div>
    )
}
