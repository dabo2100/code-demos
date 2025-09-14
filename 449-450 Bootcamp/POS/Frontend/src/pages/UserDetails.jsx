import { useEffect } from 'react';
import useUsers from '../hooks/useUsers';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function UserDetails() {
    const { deleteUser} = useUsers();
    const navigate = useNavigate();
  const params = useParams();
  const { getUserDetails } = useUsers();

  const handeRemove = () => {
    deleteUser(params.userId).then(() => {
      toast.success('User Deleted Successfuly ');
      navigate('../');
    });
  };

  useEffect(() => {
    getUserDetails(params.userId).then((res) => {
      console.log(res);
    });
  });
  return (
    <div>
      <button className="btn btn-error" onClick={handeRemove}>
        Delete This User
      </button>
    </div>
  );
}

