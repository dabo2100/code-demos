import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { domain } from '../store';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function NewEmployee() {
  const navigate = useNavigate();
  const initalValues = { name: '', salary: '', title: '' };
  const validateSchema = Yup.object({
    name: Yup.string().required(),
    salary: Yup.number().required(),
    title: Yup.string().required(),
  });

  const handleRegister = (values) => {
    axios
      .post(`${domain}/api/employees`, {
        data: {
          name: values.name,
          salary: +values.salary,
          title: values.title,
        },
      })
      .then(() => {
        toast.success('Successfully Login !');
        navigate('../');
      });
    console.log(values);
  };
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Formik initialValues={initalValues} validationSchema={validateSchema} onSubmit={handleRegister}>
        <Form className="bg-gray-900 flex flex-col gap-3 w-[450px] p-4">
          <h1>Enter New Employee</h1>
          <Field name="name" className="input w-full" placeholder="Please Enter Employee Name" />
          <ErrorMessage name="name" component={'div'} className="text-red-500" />

          <Field name="salary" className="input w-full" placeholder="Please Enter Employee Salary" />
          <ErrorMessage name="salary" component={'div'} className="text-red-500" />

          <Field name="title" className="input w-full" placeholder="Please Enter Employee Title" />
          <ErrorMessage name="title" component={'div'} className="text-red-500" />
          <button type="submit" className="btn btn-primary">
            Add New Employee
          </button>
        </Form>
      </Formik>
    </div>
  );
}
