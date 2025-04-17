import logoImg from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import "./Header.css";
import { useState } from "react";
export default function Header() {
    const [menuIndex, setMenuIndex] = useState(false);
    return (
        <header className="col-12 py-3 container d-flex align-items-center justify-content-between">
            <img src={logoImg} />
            <IoMdMenu onClick={() => setMenuIndex(true)} style={{ color: "black", fontSize: "2rem" }} />
            {
                menuIndex ? (
                    <div className="ourOffCanvas" onClick={() => setMenuIndex(false)}>
                        <div onClick={(event) => event.stopPropagation()} className="content animate__animated animate__fadeInRight"></div>
                    </div>
                ) : null
            }
        </header>
    )
}
