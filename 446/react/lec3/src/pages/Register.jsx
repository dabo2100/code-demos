import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Register() {
  const validationSchema = Yup.object({
    email: Yup.string("اكتب حروف يلا")
      .email()
      .required("This Filed is Required"),
    password: Yup.string().matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      "Password must contain at least one uppercase letter, one number, and one special character."
    ),
    username: Yup.string().required(),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="p-3 contianer d-flex align-items-center justify-content-center">
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={{ username: "", email: "", password: "" }}
      >
        <Form className="bg-white rounded border p-3 d-flex flex-column gap-3">
          <h1>Add New User</h1>
          <Field
            name="username"
            className="form-control"
            type="text"
            placeholder="Enter UserName"
            autoComplete="false"
          />
          <ErrorMessage
            component={"div"}
            name="username"
            className="text-danger"
          />
          <Field
            name="email"
            className="form-control"
            type="email"
            placeholder="Enter email"
            autoComplete="false"
          />
          <ErrorMessage
            component={"div"}
            name="email"
            className="text-danger"
          />
          <Field
            name="password"
            className="form-control"
            type="password"
            placeholder="Enter password"
            autoComplete="false"
          />
          <ErrorMessage
            component={"div"}
            name="password"
            className="text-danger"
          />
          <button type="submit" className="btn btn-primary col-12">
            Login
          </button>
        </Form>
      </Formik>

      {/* <input type="text" placeholder="Enter UserName" />
      <input type="text" placeholder="Enter User Email" />
      <input type="text" placeholder="Enter User Password" />
      <input type="text" placeholder="Enter User Match Password" />
      <input type="text" placeholder="Enter Your Address" /> */}
    </div>
  );
}
