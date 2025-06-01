import { Link } from "react-router-dom";
import logoImg from "../assets/Logo Vector.png";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import "./Header.css";

export default function Header() {
  return (
    <div className="col-12 py-3 bg-white shadow border border-bottom">
      <div className="container d-flex align-items-center justify-content-between">
        <img src={logoImg} />
        <div>
          <input className="form-control" placeholder="Search" />
        </div>
        <nav className="d-flex align-items-center gap-3">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <div className="d-flex align-items-center gap-3">
          <IoIosHeartEmpty />
          <BsCart3 />
          <CiUser />
        </div>
      </div>
    </div>
  );
}
