import { useRecoilState } from "recoil";
import NoProductImg from "../../../assets/no-product.png";
import { $FatoraCart } from "../../../store";
export default function ProductCard({ documentId, product_price, product_stock_qty, product_name }) {

    const [cart, setCart] = useRecoilState($FatoraCart);
    const addToCart = () => {
        let obj = {
            documentId: documentId,
            product_name: product_name,
            product_order_qty: 1,
            product_stock_qty: product_stock_qty,
            product_price: product_price,
        };
        let oCart = [...cart];

        let productIndex = cart.findIndex(el => el.documentId == documentId);
        if (productIndex == -1) {
            oCart.push(obj);
        }
        else {
            let obj = { ...oCart[productIndex] };
            obj.product_order_qty++;
            oCart[productIndex] = obj;
        }
        setCart(oCart);
    }

    return (
        <div className="productContainer col-12 col-md-6 col-lg-3 p-3">
            <div className="card col-12">
                <img src={NoProductImg} className="card-img-top" style={{ height: "10rem", objectFit: "contain" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product_name}</h5>
                    <p className="card-text">Price : {product_price} EGP</p>
                    <p className="card-text">Stock : {product_stock_qty}</p>
                    <button onClick={addToCart} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
