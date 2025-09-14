import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { newUserSchema, newUserValues } from '../store/Validators';
import { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';

export default function AddNewUser() {
  const { getUserRoles, addNewUser } = useUsers();
  const [roles, setRoles] = useState([]);

  const handleSubmit = (values) => {
    addNewUser(values);
  };
  useEffect(() => {
    getUserRoles().then(setRoles);
  }, []);

  return (
    <div className="w-full h-full overflow-auto flex items-center gap-4 flex-col">
      <div className="bg-gray-900 p-3 flex items-center justify-between w-full">
        <Link to={'../'} className="btn btn-primary">
          Back
        </Link>
        <h1>Add New User users</h1>
      </div>

      <Formik validationSchema={newUserSchema} initialValues={newUserValues} onSubmit={handleSubmit}>
        <Form className="bg-gray-900 shadow rounded p-3 w-[400px] border flex flex-col gap-3">
          <h1>Add New User</h1>
          <Field className="input w-full" name="email" type="email" placeholder="Enter New User Email" />
          <ErrorMessage name="email" component={'div'} className="text-red-500" />
          <Field className="input w-full" name="username" type="username" placeholder="Enter New User Name" />
          <ErrorMessage name="username" component={'div'} className="text-red-500" />
          <Field className="input w-full" name="password" type="password" placeholder="Enter New User Password" />
          <ErrorMessage name="password" component={'div'} className="text-red-500" />
          <Field className="select w-full" as="select" name="user_role">
            <option disabled hidden value={-1}>
              Select User Role
            </option>
            {roles?.map((el) => {
              console.log(el);
              return (
                <option key={el.documentId} value={el.id - 1}>
                  {el.name}
                </option>
              );
            })}
          </Field>
          <ErrorMessage name="user_role" component={'div'} className="text-red-500" />
          <button type="submit" className="btn btn-success w-full">
            Add New User
          </button>
        </Form>
      </Formik>
    </div>
  );
}
