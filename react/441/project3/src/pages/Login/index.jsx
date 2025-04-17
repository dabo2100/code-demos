import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
    // useNavigate
    const navigate = useNavigate();
    const emailDB = "ahmed@icloud.com";
    const passwordDB = "123456";
    const emailInput = useRef();
    const passwordInput = useRef();

    const handleSubmit = (evnet) => {

        evnet.preventDefault()
        let mail = emailInput.current.value;
        let pass = passwordInput.current.value;
        if (mail.toLowerCase() == emailDB.toLowerCase() && pass == passwordDB) {
            localStorage.setItem("token", 1234);
            navigate('/');
        } else {
            Swal.fire({
                icon: "error",
                title: "Wrong Username or password",
                timer: 1200
            })
        }

    }

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token && token == 1234) {
            navigate('/')
        }
    }, []);
    return (
        <div className="col-12 loginPage d-flex justify-content-center align-items-center h-100">
            <form onSubmit={handleSubmit} className="bg-white shadow border rounded p-3 gap-3 d-flex flex-column col-12 col-md-4">
                <input ref={emailInput} className="form-control" type="text" placeholder="Enter your email" />
                <input ref={passwordInput} className="form-control" type="text" placeholder="Enter your password" />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}