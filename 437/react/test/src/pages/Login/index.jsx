import axios from "axios";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const phoneInput = useRef();
    const codeInput = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        let code = codeInput.current.value;
        let phone = phoneInput.current.value;
        let newUser = {
            user_phone: phone,
            user_code: code,
        }
        let domain = "https://support.israaosman.com";
        let endpoit = "/php/index.php/api/auth/login";
        let url = domain + endpoit;

        axios.post(url, newUser).then((res) => {
            if(res.data.err){
                alert('Wrong User name or password')
            }
            else{
                navigate("/");
            }
            console.log(res.data);
        })
    }

    return (
        <div className="col-12 d-flex justify-content-center align-items-center pt-5">
            <form onSubmit={handleSubmit} className="col-10 col-md-6 col-lg-4 bg-white d-flex flex-column gap-3 rounded-3 p-3 shadow border">
                <h4 className="mb-0">Welcome Back To The System</h4>
                <input ref={phoneInput} className="form-control" placeholder="Enter User Phone" />
                <input ref={codeInput} className="form-control" placeholder="Enter User Code" />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}