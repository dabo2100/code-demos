import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { checkToken } from '../shaedLogic/middleware';

export default function Login() {
  const navigate = useNavigate();
  const intialValues = { email: '', password: '', rememberIndex: false };
  const validationSchema = Yup.object({
    email: Yup.string().email('Please Enter Vaild Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const makeLogin = (formValues) => {
    let domain = 'http://localhost:1337';
    let endPoint = '/api/auth/local';
    let url = domain + endPoint;
    axios
      .post(url, {
        identifier: formValues.email,
        password: formValues.password,
      })
      .then((res) => {
        toast.success('Successfully Login !');
        console.log(res);
        if (formValues.rememberIndex == true) {
          localStorage.setItem('token', res.data.jwt);
        } else {
          sessionStorage.setItem('token', res.data.jwt);
        }
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Wrong Email or Password !');
      });
  };
  
  useEffect(() => {
    checkToken().then((res) => res && navigate('/'));
  }, []);

  return (
    <div className="w-full h-full bg-gray-950 flex justify-center items-center">
      <Formik initialValues={intialValues} onSubmit={makeLogin} validationSchema={validationSchema}>
        <Form className="bg-gray-800 gap-3 rounded-2xl shadow-2xl w-[450px] px-3 py-5 text-gray-950 flex flex-col">
          <h1>Welcome Back , Please Login</h1>
          <Field name="email" className="input w-full text-white" placeholder="Enter Your Email" />
          <ErrorMessage component={'div'} className="text-red-500 text-[12px]" name="email" />
          <Field name="password" className="input w-full text-white" placeholder="Enter Your Password" />
          <ErrorMessage component={'div'} className="text-red-500 text-[12px]" name="password" />
          <div className="w-full">
            <label className="label">
              <Field name="rememberIndex" type="checkbox" className="checkbox" />
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </Form>
      </Formik>
    </div>
    // Event => Arrow Function ( As Action )
    // ()=> handleClick('Ahmed')
  );
}
