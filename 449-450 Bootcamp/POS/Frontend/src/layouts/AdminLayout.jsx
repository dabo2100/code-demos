import { Link, Outlet } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { useEffect } from 'react';

export default function AdminLayout() {
  let linkStyle = 'text-lg white hover:bg-gray-800 transition cursor-pointer p-3';
  const { checkToken, logOut } = useLogin();
  useEffect(() => checkToken(), []);

  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <div className="w-[250px] h-full bg-gray-950">
        <h1>Admin Dashboard</h1>
        <div className="flex flex-col">
          <Link className={linkStyle} to={'/admin'}>
            Dashboard
          </Link>
          <Link className={linkStyle} to={'invoices'}>
            Invoices
          </Link>
          <Link className={linkStyle} to={'users'}>
            Users
          </Link>
        </div>

        <button className="btn btn-error" onClick={logOut}>
          Logout
        </button>
      </div>
      <div className="grow h-full">
        <Outlet />
      </div>
    </div>
  );
}
