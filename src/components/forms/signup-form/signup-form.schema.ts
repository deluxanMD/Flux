import {object, ref, string} from 'yup';

export const signupFormSchema = object({
  email: string()
    .email('Please enter a valid email address')
    .default('')
    .required(),
  password: string().default('').min(8).max(20),
  confirmPassword: string()
    .default('')
    .oneOf([ref('password')], 'passwords are not matching')
    .required(),
});
