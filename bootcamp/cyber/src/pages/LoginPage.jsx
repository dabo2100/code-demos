import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AuthRepo } from "../data/repos/AuthRepo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        email: Yup.string().email("inValid Email").required('Required Field'),
        password: Yup.string().required('Required Field'),
    })
    const handleLogin = (values) => {
        AuthRepo.login(values).then((res) => {
            if (res) {
                toast.success('Login success !');
                sessionStorage.setItem('token', res.jwt);
                let redirect = sessionStorage.getItem('redirect');
                if (redirect) {
                    navigate('/checkout')

                } else {
                    navigate('/profile')
                }
            } else {
                toast.error('Wrong email or password');
            }
        })
        // console.log(values);
    }
    return (
        <div className="w-full h-[100vh] bg-gray-600 flex items-center justify-center">
            <Formik onSubmit={handleLogin} validationSchema={validationSchema} initialValues={{ email: "", password: "" }}>
                <Form className="bg-white p-3 rounded shadow w-[400px] flex flex-col gap-3">
                    <label htmlFor="">Email</label>
                    <Field placeholer="Enter Email Here..." className="form-control" name="email" />
                    <ErrorMessage name="email" component={"div"} className="text-red-500" />
                    <label htmlFor="">Password</label>
                    <Field type="password" placeholer="Enter Password Here..." className="form-control" name="password" />
                    <ErrorMessage name="password" component={"div"} className="text-red-500" />
                    <button className="w-full btn btn-primary">Login</button>
                </Form>
            </Formik>
        </div>
    )
}
