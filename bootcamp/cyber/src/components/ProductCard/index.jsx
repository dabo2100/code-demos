import { toast } from "react-toastify";
import styles from "./index.module.css"

export default function ProductCard({ name, price, imgUrl, salePrice, product }) {
    const addProductToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let index = cart.findIndex(el => el.documentId == product.documentId);
        if (index == -1) {
            cart.push({ ...product, qty: 1 });
            toast.success("Added to Cart");
        } else {
            cart[index].qty++;
            toast.info("Qty increased info Cart");
        }
        localStorage.setItem('cart', JSON.stringify(cart));

    }
    return (
        <div className='col-12 col-md-6 col-lg-4 p-2'>
            <div className={'col-12 p-3 rounded d-flex gap-2 flex-column ' + styles.productCard}>
                <img src={imgUrl ? imgUrl : "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"} alt="No Img" />
                <h5 className="m-0">{name}</h5>
                <p className="m-0">$ {salePrice} <del>{price}</del></p>
                <button onClick={addProductToCart}>Add To Cart</button>
            </div>
        </div>
    )
}
