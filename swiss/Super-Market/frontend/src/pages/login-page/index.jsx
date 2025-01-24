import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
    const navigate = useNavigate();
    const checkUserToken = () => {
        let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        if (userInfo) {
            axios.get("http://localhost:1337/api/frontend-users", {
                params: {
                    filters: {
                        documentId: {
                            $eq: userInfo.documentId,
                        },
                    },
                }
            }).then((res) => {
                if (res.data.data.length > 0) {
                    let userInfo = res.data.data[0];
                    if (userInfo.is_admin == true) {
                        navigate('/report')
                    } else {
                        navigate('/pos')
                    }
                }
            }).catch((err) => {
                console.log(err);
            })
        }


    }

    const handleLogin = () => {
        event.preventDefault();
        // data => validate => check with strapi
        axios.get("http://localhost:1337/api/frontend-users", {
            params: {
                filters: {
                    $and: [
                        {
                            user_email: {
                                $eq: formRefs.current[0].value,
                            },
                        }, {
                            user_password: {
                                $eq: formRefs.current[1].value,
                            },
                        }
                    ]

                },
            }
        }).then((res) => {
            if (res.data.data.length == 0) {
                Swal.fire({
                    icon: "error",
                    title: "Error Data",
                    text: "Wrong User Email Or Password"
                })
            } else {
                // is admin ?
                let userInfo = res.data.data[0];
                let obj = {
                    documentId: userInfo.documentId,
                    user_name: userInfo.user_name,
                    is_admin: userInfo.is_admin,
                }
                sessionStorage.setItem("userInfo", JSON.stringify(obj));
                if (userInfo.is_admin == true) {
                    navigate('/report')
                } else {
                    navigate('/pos')
                }
            };
        }).catch((err) => {
            console.log(err);
        })

    }

    const formRefs = useRef([]);

    useEffect(() => {
        checkUserToken();
    }, [])

    return (
        <div className="col-12 d-flex h-100 align-items-center justify-content-center">
            <form onSubmit={handleLogin} className="col-4 p-4 gap-2 d-flex flex-column rounded bg-white shadow border">
                <h4 className="col-12 text-center">Welcome To Market</h4>
                <label htmlFor="">User Email</label>
                <input ref={(el) => { formRefs.current[0] = el }} className="form-control" type="email" placeholder="Enter Your Email Here" />
                <label htmlFor="">User Password</label>
                <input ref={(el) => { formRefs.current[1] = el }} className="form-control" type="password" placeholder="Enter Your password" />
                <button className="btn btn-primary col-12">Login</button>
            </form>
        </div>
    )
}
