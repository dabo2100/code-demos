import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  // const [userInfo, setUserInfo] = useState({});
  // Gate (jwt => Done , NoJWT => navigate('/login'))

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  };
  return (
    <div className="w-full h-full d-flex">
      {/* <h1>Welcome {userInfo.username} to The Home Page</h1> */}
      <button className="btn btn-error" onClick={logout}>
        LogOut
      </button>
    </div>
  );
}

// Layout
