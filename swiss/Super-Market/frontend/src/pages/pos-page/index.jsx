import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { useRecoilState } from "recoil";
import { $FatoraCart } from "../../store";
import { MdDeleteForever } from "react-icons/md";
import { IoIosPrint } from "react-icons/io";
import { useReactToPrint } from "react-to-print";
import { FaPowerOff } from "react-icons/fa";
import styles from "./index.module.css";

export default function PosPage() {
    const contentRef = useRef();

    const reactToPrintFn = useReactToPrint({ contentRef });

    const [totalValue, setTotalVaule] = useState(0)
    const navigate = useNavigate();
    const [products, setProdcuts] = useState([]);
    const [cart, setCart] = useRecoilState($FatoraCart);

    const removeProductFromCart = (id) => {
        let productIndex = cart.findIndex(el => el.documentId == id);
        let oCart = [...cart];
        oCart.splice(productIndex, 1);
        setCart(oCart);
    }

    const getAllProdcuts = () => {
        axios.get("http://localhost:1337/api/products").
            then((res) => {
                setProdcuts(res.data.data);
                console.log(res);
            }).catch((err) => {
                console.log(err)
            })
    }

    const checkUserToken = () => {
        let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

        if (userInfo) {
            axios.get("http://localhost:1337/api/frontend-users", {
                params: {
                    filters: {
                        documentId: {
                            $eq: userInfo.documentId,
                        },
                    },
                }
            }).then((res) => {
                if (res.data.data.length > 0) {
                    let userInfo = res.data.data[0];
                    if (userInfo.is_admin == true) {
                        navigate('/report')
                    } else {
                        navigate('/pos')
                    }
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            navigate('/');
        }


    }


    const incrementQty = (id) => {
        let productIndex = cart.findIndex(el => el.documentId == id);
        let oCart = [...cart];
        let obj = { ...oCart[productIndex] };
        if (obj.product_order_qty < obj.product_stock_qty) {
            obj.product_order_qty++;
            oCart[productIndex] = obj;
        }
        setCart(oCart);
    }
    const decrementQty = (id) => {
        let productIndex = cart.findIndex(el => el.documentId == id);
        let oCart = [...cart];
        let obj = { ...oCart[productIndex] };
        if (obj.product_order_qty > 1) {
            obj.product_order_qty--;
            oCart[productIndex] = obj;
        } else {
            oCart.splice(productIndex, 1);
        }
        setCart(oCart);
    }

    const handleLogOut = () => {
        sessionStorage.clear();
        navigate("/")
    }

    useEffect(() => {
        checkUserToken();
        getAllProdcuts();
    }, []);

    useEffect(() => {
        let final = 0;
        cart.forEach((el) => {
            final = final + (el.product_price * el.product_order_qty)
        });
        setTotalVaule(final);
    }, [cart]);


    return (
        <div className="col-12 d-flex h-100 overflow-hidden">
            <div className="col-4 h-100 overflow-auto">
                <table className="table table-dark table-bordered" ref={contentRef}>
                    <thead>
                        <tr>
                            <th>-</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Qty</th>
                            <th>Product Total</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((el, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <th>{el.product_name}</th>
                                        <th>{el.product_price}</th>
                                        <th>
                                            <div className="d-flex align-items-center justify-content-center gap-2">
                                                <button onClick={() => decrementQty(el.documentId)} className={`btn btn-danger ${styles.noPrint}`}>-</button>
                                                {el.product_order_qty}
                                                <button onClick={() => incrementQty(el.documentId)} className={`btn btn-success ${styles.noPrint}`}>+</button>

                                            </div>
                                        </th>
                                        <th>{el.product_order_qty * el.product_price}</th>
                                        <th><MdDeleteForever onClick={() => removeProductFromCart(el.documentId)} /></th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}>Total</td>
                            <td colSpan={2}>{totalValue}</td>
                        </tr>
                    </tfoot>
                </table>
                <button onClick={reactToPrintFn} className="btn btn-primary col-12"><IoIosPrint />Print</button>
                <button onClick={handleLogOut} className="btn btn-danger col-12"><FaPowerOff />LogOut</button>
            </div>
            <div className="col-8  h-100 overflow-auto d-flex flex-wrap">
                {
                    products.map((el) => {
                        return (
                            <ProductCard
                                key={el.documentId}
                                documentId={el.documentId}
                                product_price={el.product_price}
                                product_stock_qty={el.product_stock_qty}
                                product_name={el.product_name}
                            />)
                    })
                }
            </div>
        </div>
    )
}
