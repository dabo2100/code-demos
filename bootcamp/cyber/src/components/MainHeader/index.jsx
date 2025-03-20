import { Link } from "react-router-dom";
import logoImg from "../../assets/Logo.png";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import SideHeader from "../SideHeader";
import { useSideHeader } from "../../store";

export default function MainHeader() {
    const { index, openSideHeader } = useSideHeader();
    return (
        <header className='col-12 border-bottom mb-3'>
            <div className='container d-flex align-items-center justify-content-between py-3'>
                <img src={logoImg} />
                <div className="col-4 d-none d-md-flex">
                    <input className="form-control" placeholder="Search Here" />
                </div>
                <nav className="d-none d-md-flex gap-2 ">
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    <Link>Blog</Link>
                </nav>
                <div className="d-none d-md-flex text-dark fs-4 gap-3">
                    <CiHeart />
                    <CiShoppingCart />
                    <CiUser />
                </div>
                <IoIosMenu onClick={openSideHeader} className="d-block d-md-none text-dark fs-4" />
            </div>
            {index && <SideHeader />}
        </header>
    )
}


// 1000 [5] 200 1 ,2 3, 4, 5
// 1000 [20] 50