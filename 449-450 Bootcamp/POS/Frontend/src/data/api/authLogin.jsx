import axios from 'axios';
import { domain } from '../../store';

export const authLogin = async (values) => {
  let res = await axios.post(domain + '/api/auth/local', {
    identifier: values.email,
    password: values.password,
  });
  
  return res;
};
