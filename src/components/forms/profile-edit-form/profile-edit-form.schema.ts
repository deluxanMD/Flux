import {object, string} from 'yup';

export const profileEditFormSchema = object().shape({
  firstName: string().default('').required(),
  lastName: string().default('').required(),
  dateOfBirth: string().default('').required(),
});
