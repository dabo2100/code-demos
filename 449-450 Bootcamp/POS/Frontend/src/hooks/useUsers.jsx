import axios from 'axios';
import { domain } from '../store';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function useUsers() {
  const getAllUsers = async () => await axios.get(domain + '/api/users?', { params: { populate: 'user_role' } }).then((res) => res.data);
  const getUserRoles = async () => await axios.get(domain + '/api/user-roles').then((res) => res.data.data);
  const navigate = useNavigate();
  const addNewUser = async (values) => {
    let final;
    axios
      .post(domain + '/api/auth/local/register', {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        let userId = res.data.user.id;
        axios
          .put(domain + `/api/users/${userId}`, {
            user_role: values.user_role,
          })
          .then((res) => {
            toast.success('User Added Successfuly');
            navigate('../');
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
        console.log(err);
      });
  };
  const getUserDetails = async (userId) => await axios.get(domain + `/api/users/${userId}?populate=*`).then((res) => res.data);
  const deleteUser = async (userId) => await axios.delete(domain + `/api/users/${userId}`);
  return { getAllUsers, getUserRoles, addNewUser, getUserDetails, deleteUser };
}
