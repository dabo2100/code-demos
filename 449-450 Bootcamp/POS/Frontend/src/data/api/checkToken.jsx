import axios from 'axios';
import { domain } from '../../store';
export const checkToken = async (jwt) => {
  let res = await axios.get(domain + '/api/users/me', {
    headers: { Authorization: `Bearer ${jwt}` },
    params: { populate: '*' },
  });
  return res;
};
