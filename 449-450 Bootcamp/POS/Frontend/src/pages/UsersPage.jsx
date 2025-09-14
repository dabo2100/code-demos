import { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import { Link, useNavigate } from 'react-router-dom';

export default function UsersPage() {
  const [searchVal, setSearchValue] = useState('');
  const [users, setUsers] = useState([]);
  const { getAllUsers } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <div className="w-full h-full overflow-auto">
      <div className="bg-gray-900 p-3 flex items-center justify-between">
        <h1>System users</h1>
        <input onChange={(event) => setSearchValue(event.target.value)} className="input" placeholder="Search Users" />
        <Link to={'new'} className="btn btn-primary">
          Add New User
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>User Role</th>
          </tr>
        </thead>
        <tbody>
          {users
            ?.filter((el) => el.username?.toLowerCase().includes(searchVal?.toLowerCase()) || el.user_role?.name?.toLowerCase().includes(searchVal?.toLowerCase()))
            ?.map((el, index) => (
              <tr
                key={el.documentId}
                className="hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  navigate(`${el.id}`);
                }}
              >
                <td>{index + 1}</td>
                <td>{el.username}</td>
                <td>{el.user_role?.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
