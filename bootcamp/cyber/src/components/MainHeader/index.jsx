import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/Logo.png";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import SideHeader from "../SideHeader";
import { useSideHeader } from "../../store";
import { useEffect, useState } from "react";

export default function MainHeader() {
    const navigate = useNavigate();
    const { index, openSideHeader } = useSideHeader();
    const [token, setToken] = useState();
    useEffect(() => {
        setToken(sessionStorage.getItem('token'));
    }, []);

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        setToken(undefined);
        navigate('/');
    }
    return (
        <header className='col-12 border-bottom mb-3'>
            <div className='container d-flex align-items-center justify-content-between py-3'>
                <img src={logoImg} />
                <div className="col-4 d-none d-md-flex">
                    <input className="form-control" placeholder="Search Here" />
                </div>
                <nav className="d-none d-md-flex gap-2 ">
                    <Link to={'/'}>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    <Link>Blog</Link>
                </nav>
                <div className="d-none d-md-flex text-dark fs-4 gap-3">
                    <CiHeart />
                    <Link to={'cart'}><CiShoppingCart /></Link>
                    <Link to={'/login'}><CiUser /></Link>
                </div>
                {token && <button className="btn btn-danger" onClick={logout}>Log out</button>}
            </div>
            {index && <SideHeader />}
        </header>
    )
}