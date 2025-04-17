import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
    // useRef / useNavigate / useState
    // useNavigate 

    // const navigate = useNavigate();
    // let emailDB = "Ahmed@icloud.com";
    // let passDB = "123456";

    // const emailInput = useRef();
    // const passwordInput = useRef();
    // const handleLogin = (event) => {
    //     event.preventDefault();
    //     let email = emailInput.current.value;
    //     let password = passwordInput.current.value;
    //     if (email == emailDB && password == passDB) {
    //         navigate("/");
    //     } else {
    //         Swal.fire({
    //             icon: "error",
    //             title: "Wrong Username or Password",
    //             timer: 1500
    //         })
    //     }
    //     console.log(email);
    // }

    const [counter, setCounter] = useState();
    useEffect(() => {
        console.log('Hello im Out Of Use Effect');
        setCounter(5);
    }, []);


    return (
        <div className="col-12 h-100 d-flex justify-content-center align-items-center">
            Counter is : {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {/* <form noValidate onSubmit={handleLogin} className="bg-white rounded shadow border col-12 col-md-5 p-3 d-flex flex-column">
                <h3>Welcome , Please Login</h3>
                <input ref={emailInput} className="form-control" type="email" placeholder="Enter your email" />
                <input ref={passwordInput} className="form-control" type="password" placeholder="Enter your password" />
                <button className="btn btn-primary">Log in</button>
            </form> */}
        </div>
    )
}