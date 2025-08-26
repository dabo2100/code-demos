import { useEffect, useState } from 'react';
import { IoCart, IoHomeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { useCart } from '../store';

export default function PosHeader() {
  const { openCart, cartContent } = useCart();
  const [userInfo, setUserInfo] = useState({});
  const { checkToken, logOut } = useLogin();
  useEffect(() => {
    // Check of Token and user Authority
    checkToken();
    setUserInfo(JSON.parse(sessionStorage.getItem('user-info')));
  }, []);
  return (
    <header className="flex w-full items-center justify-between bg-violet-900 p-3">
      <Link to="/pos" className="btn btn-primary">
        <IoHomeSharp />
        <p>All Categories</p>
      </Link>
      <h1 className="text-lg p-3">Welcome , {userInfo?.username}</h1>
      <div className="flex gap-3">
        <button className="btn btn-success" disabled={cartContent.length == 0 ? true : false} onClick={openCart}>
          <IoCart />
          Open Cart
        </button>
        <button className="btn btn-error" onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
}
