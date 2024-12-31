import styles from "./index.module.css";
import logo from "../../assets/app-images/Logo-Light.png"
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="col-12" id={styles.footer}>
            <div className="container d-flex  flex-column">
                <div className="col-12 d-flex flex-wrap justify-content-between">
                    <div className={styles.left + ' d-flex flex-column'}>
                        <img src={logo} width={66} />
                        <p className="m-0">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                    </div>
                    <div id={styles.center} className="d-flex flex-column">
                        <h2>Services</h2>
                        <p>Bonus program</p>
                        <p>Gift cards</p>
                        <p>Credit and payment</p>
                        <p>Service contracts</p>
                        <p>Non-cash account</p>
                        <p>Payment</p>
                    </div>
                    <div id={styles.center} className="d-flex flex-column">
                        <h2>Services</h2>
                        <p>Bonus program</p>
                        <p>Gift cards</p>
                        <p>Credit and payment</p>
                        <p>Service contracts</p>
                        <p>Non-cash account</p>
                        <p>Payment</p>
                    </div>
                    {/* <div className={styles.right}>Right</div> */}
                </div>
                <div className="col-12 d-flex align-items-center gap-3">
                    <FaTwitter />
                    <FaTwitter />
                    <FaTwitter />
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}
