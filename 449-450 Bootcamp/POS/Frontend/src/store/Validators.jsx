import * as Yup from 'yup';

export const LoginFormValues = { email: '', password: '', rememberIndex: false };
export const loginFormSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

export const newUserValues = { email: '', username: '', password: '', user_role: -1 };

export const newUserSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6, 'Password must be at least 6 characters').max(20, 'Password must be at most 20 characters').matches(passwordPattern, 'Must include upper & lower case, a number, and a special character').required(),
  username: Yup.string().min(4).required(),
  user_role: Yup.string().notOneOf(['-1'], 'Please select a valid role'),
});
