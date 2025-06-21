import { Link, useNavigate } from "react-router-dom";
import { systemEmployes } from "../store";

export default function EmployeeList() {
  const { list } = systemEmployes();
  const navigate = useNavigate();

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
              <tr
                key={el.id}
                className="hover:bg-base-300"
                onClick={() => navigate("./" + el.id)}
              >
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
