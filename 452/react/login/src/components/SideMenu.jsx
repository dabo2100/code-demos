import { Link } from 'react-router-dom';

export default function SideMenu() {
  return (
    <div className="w-[300px] h-full bg-red-500">
      <h1>Company Logo</h1>
      <nav className="flex flex-col gap-3">
        <Link to={'/'}>Home</Link>
        <Link to={'/pos'}>POS</Link>
        <Link to={'/admin'}>Admin</Link>
        <Link to={'/settings'}>Settings</Link>
      </nav>
    </div>
  );
}
