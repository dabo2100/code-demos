import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  // refrence
  const nameInput = useRef();
  const emailInput = useRef();
  const passInput = useRef();
  const navigate = useNavigate();

  // Logic
  const handleSubmit = (event) => {
    event.preventDefault();
    let name = nameInput.current.value;
    let email = emailInput.current.value;
    let password = passInput.current.value;
    let newUserObject = { name, email, password };
    // LocalStorage
    let oldUsers = JSON.parse(localStorage.getItem("users")) || [];
    oldUsers.push(newUserObject);
    localStorage.setItem("users", JSON.stringify(oldUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUserObject));
    navigate("/");
  };

  return (
    <div className="bg-white h-100 col-12 d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column p-4 bg-white shadow border rounded gap-3"
      >
        <h1>Register New User</h1>
        <input
          ref={nameInput}
          className="form-control"
          placeholder="Enter your Name"
        />
        <input
          ref={emailInput}
          className="form-control"
          placeholder="Enter your Email"
        />
        <input
          ref={passInput}
          className="form-control"
          placeholder="Enter your Password"
        />
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}
