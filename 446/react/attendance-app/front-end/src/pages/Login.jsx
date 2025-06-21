import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  const navigate = useNavigate();
  const intialValues = { email: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please Enter Vaild Email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const makeLogin = (formValues) => {
    // Send Collected Data To Backend
    console.log(formValues);
    let res = true; // false
    if (res) {
      toast.success("Successfully Login !");
      navigate("/");
    } else {
      toast.error("Wrong Email or Password !");
    }
  };

  return (
    <div className="w-full h-full bg-gray-950 flex justify-center items-center">
      <Formik
        initialValues={intialValues}
        onSubmit={makeLogin}
        validationSchema={validationSchema}
      >
        <Form className="bg-white gap-3 rounded-2xl shadow-2xl w-[450px] px-3 py-5 text-gray-950 flex flex-col">
          <h1>Welcome Back , Please Login</h1>
          <Field
            name="email"
            className="input w-full text-white"
            placeholder="Enter Your Email"
          />
          <ErrorMessage
            component={"div"}
            className="text-red-500 text-[12px]"
            name="email"
          />
          <Field
            name="password"
            className="input w-full text-white"
            placeholder="Enter Your Password"
          />
          <ErrorMessage
            component={"div"}
            className="text-red-500 text-[12px]"
            name="password"
          />
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
