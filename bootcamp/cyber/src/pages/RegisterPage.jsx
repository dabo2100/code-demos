import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { AuthRepo } from '../data/repos/AuthRepo';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function RegisterPage() {
    const navigate = useNavigate();
    const phoneRegex = /^\+201[0125]\d{8}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Required Field'),
        username: Yup.string().required('Required Field'),
        password: Yup.string().required('Required Field').matches(passwordRegex, 'الباسورد مش حلو'),
        phone: Yup.string().required('Required Field').matches(phoneRegex, 'الرقم مش حلو'),
    });

    const handleSubmit = (values) => {
        AuthRepo.register(values).then((res) => {
            res && toast.success(`Ya Welcome , Ya ${res.user.username}`);
            res && sessionStorage.setItem('token', res.jwt);
            navigate('/');
        })
    }
    return (
        <div className='w-full h-full flex justify-center items-center bg-neutral-300'>
            <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={{
                email: "", password: "", username: "", phone: ""
            }} >
                <Form className='w-[550px] p-3 rounded-2xl shadow border-1 bg-white'>
                    <h1>Register to the system</h1>
                    <label className='w-full'> Enter you email</label>
                    <Field type="text" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className='text-red-500 ' />

                    <label className='w-full'> Enter you username</label>
                    <Field type="text" name="username" className="form-control" />
                    <ErrorMessage name="username" component="div" className='text-red-500 ' />


                    <label className='w-full'> Enter you phone</label>
                    <Field type="text" name="phone" className="form-control" />
                    <ErrorMessage name="phone" component="div" className='text-red-500 ' />


                    <label className='w-full'> Enter you password</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className='text-red-500 ' />

                    <button type='submit' className='btn btn-primary'>Register</button>
                </Form>
            </Formik>
        </div>
    )
}

// token <= User 