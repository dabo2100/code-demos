import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import useLogin from '../hooks/useLogin';
import { loginFormSchema, LoginFormValues } from '../store/Validators';

export default function LoginPage() {
  const { login, checkToken } = useLogin();
  useEffect(() => checkToken(), []);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Formik initialValues={LoginFormValues} validationSchema={loginFormSchema} onSubmit={login}>
        <Form className="bg-gray-900 p-4 w-[90%] md:w-[450px] rounded shadow border border-gray-600 flex flex-col gap-3">
          <h1>Welcome back , Please Login</h1>
          <Field className="input w-full" type="email" name="email" placeholder="Enter you email" />
          <ErrorMessage component={'div'} className="text-red-500" name="email" />
          <Field className="input w-full" type="text" name="password" placeholder="Enter you password" />
          <ErrorMessage component={'div'} className="text-red-500" name="password" />

          <label className="flex gap-3">
            <Field type="checkbox" className="checkbox" name="rememberIndex" />
            Remember Me
          </label>
          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
