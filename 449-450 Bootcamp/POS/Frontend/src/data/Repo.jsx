import { authLogin } from './api/authLogin';
import { checkToken } from './api/checkToken';

export const LoginRepo = {
  auth_login: (values) => authLogin(values),
  check_token: (token) => checkToken(token),
};
