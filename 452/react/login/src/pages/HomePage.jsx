import { useNavigate } from 'react-router-dom';
import { userInfo } from '../store';

export default function HomePage() {
  const { value } = userInfo();
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  };
  return (
    <div className="w-full h-full d-flex">
      <h1>Welcome {value.username} to The Home Page</h1>
      <button className="btn btn-error" onClick={logout}>
        LogOut
      </button>
    </div>
  );
}
