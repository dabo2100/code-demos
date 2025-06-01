import { useState } from "react";

export default function AdminPage() {
  const [allUsers, setAllUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const handleRemove = (index) => {
    let oUsers = [...allUsers];
    oUsers.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(oUsers));
    setAllUsers(oUsers);
  };

  return (
    <div className="container py-3 d-flex flex-column">
      <h1>Admin Page : All System Users</h1>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.password}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(index);
                    }}
                    className="btn btn-danger"
                  >
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
