import * as Yup from 'yup';

export const LoginFormValues = { email: '', password: '', rememberIndex: false };
export const loginFormSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
