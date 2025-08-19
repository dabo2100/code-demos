import { domain } from '../store';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { LoginRepo } from '../data/Repo';

export default function useLogin() {
  let url = domain + '/api/auth/local';
  const navigate = useNavigate();
  const location = useLocation();
  const login = (values) => {
    LoginRepo.auth_login(values)
      .then((res) => {
        let jwt = res.data.jwt;
        if (values.rememberIndex) {
          localStorage.setItem('jwt-token', jwt);
        } else {
          sessionStorage.setItem('jwt-token', jwt);
        }
        LoginRepo.check_token(jwt).then((res) => {
          let role = res.data.user_role.name;
          if (role == 'admin') {
            navigate('/admin');
          } else {
            navigate('/pos');
          }
        });
      })
      .catch((err) => {
        toast.error('Wrong Email or Password');
      });
  };

  const checkToken = () => {
    let jwt = localStorage.getItem('jwt-token') || sessionStorage.getItem('jwt-token');
    if (jwt) {
      LoginRepo.check_token(jwt)
        .then((res) => {
          let adminLocation = location.pathname.includes('admin');
          let role = res.data.user_role.name;
          let userInfo = res.data;
          sessionStorage.setItem('user-info', JSON.stringify(userInfo));
          if (role == 'admin' && !adminLocation) {
            navigate('/admin');
          } else if (role != 'admin' && adminLocation) {
            navigate('/pos');
          }
        })
        .catch((err) => {
          localStorage.clear();
          sessionStorage.clear();
          console.log(err.response.data.error.message);
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  };

  const logOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  return { login, checkToken, logOut };
}
