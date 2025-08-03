import { Link, useNavigate } from 'react-router-dom';
import { checkToken } from '../shaedLogic/middleware';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { domain } from '../store';

export default function EmployeeList() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(`${domain}/api/employees`).then((res) => {
      setList(res.data.data);
    });
    !checkToken() && navigate('/login');
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center py-5">
      <div className="container">
        <div className="w-full flex items-center justify-between border-b py-2 border-b-sky-100">
          <h1 className="text-2xl">Employee List</h1>
          <Link to="new" className="btn btn-primary">
            Add New Employee
          </Link>
        </div>
        <table className="table hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Employee Name</th>
              <th>Employee Salary</th>
              <th>Employee Job Title</th>
            </tr>
          </thead>
          <tbody>
            {list.map((el, index) => (
              <tr key={el.documentId} className="hover:bg-base-300" onClick={() => navigate('./' + el.documentId)}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.salary} EGP</td>
                <td>{el.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
