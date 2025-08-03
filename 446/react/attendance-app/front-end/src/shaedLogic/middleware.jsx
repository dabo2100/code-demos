import axios from 'axios';
import { domain } from '../store';

export async function checkToken() {
  let token = sessionStorage.getItem('token') || localStorage.getItem('token');
  let final = false;
  if (token) {
    await axios
      .get(domain + `/api/users/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => (final = true))
      .catch(() => (final = false));
  }
  return final;
}
