import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <div className="h-100 col-12 col-md-6 d-flex align-items-center">
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
      >
        <Form id="loginForm" className="d-flex flex-column gap-3 col-12">
          <h1>Welcome Back</h1>
          <p>Please Sign in to continue</p>
          <Field
            name="email"
            className="form-control"
            type="email"
            placeholder="Enter you email"
          />
          <ErrorMessage
            name="email"
            component={"div"}
            className="text-danger"
          />
          <div className="col-12 position-relative">
            <Field
              name="password"
              className="form-control"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <div
              className="position-absolute"
              style={{ right: "1rem", top: "5px", cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </div>
          </div>
          <ErrorMessage
            name="password"
            component={"div"}
            className="text-danger"
          />
          <button type="submit" className="btn">
            Sign In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
