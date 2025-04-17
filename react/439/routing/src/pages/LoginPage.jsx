import axios from "axios";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
  const phoneInput = useRef();
  const codeInput = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      "user_phone": phoneInput.current.value,
      "user_code": codeInput.current.value
    }
    // URL => Domain + END Point
    let domain = "https://support.israaosman.com";
    let endPoint = "/php/index.php/api/auth/login"; 
    let url = domain + endPoint;
    axios.post(url, data).then((res) => {
      if (res.data.err) {
        Swal.fire({
          icon: "error",
          title: "Wrong Username or Passcode",
          timer: 1500
        })
      } else {
        Swal.fire({
          icon: "success",
          title: res.data.msg,
          timer: 1500
        }).then(() => {
          let token = res.data.data[0].user_token;
          sessionStorage.setItem("token", token);
          navigate('/');
        })
      }
      console.log(res.data);
    })
  }
  return (
    <div className="col-12 h-100 d-flex align-items-center justify-content-center">
      <form onSubmit={handleLogin} className="col-10 col-md-5 d-flex flex-column p-3 gap-3 bg-white rounded shadow border">
        <h3>Login Page</h3>
        <input ref={phoneInput} className="form-control" type="text" placeholder="Enter you phone" />
        <input ref={codeInput} className="form-control" type="text" placeholder="Enter you code" />
        <button className="btn btn-primary col-12">Login</button>
      </form>
    </div>
  )
}
