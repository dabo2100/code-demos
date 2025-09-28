import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  // Gate (jwt => Done , NoJWT => navigate('/login'))
  useEffect(() => {
    let jwt = sessionStorage.getItem('jwt');

    if (!jwt) {
      navigate('/login');
    } else {
      // Confirm jwt (from backend)
      let domain = 'http://82.112.241.233:1993';
      let endPoint = '/api/users/me';
      let url = domain + endPoint;
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .then((res) => {
          setUserInfo(res.data);
          console.log(res);
        })
        .catch((err) => {
          sessionStorage.clear();
          navigate('/login');
          console.log(err);
        });
    }
  }, []);
  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  };
  return (
    <div>
      <h1>Welcome {userInfo.username} to The Home Page</h1>
      <button className="btn btn-error" onClick={logout}>
        LogOut
      </button>
    </div>
  );
}
