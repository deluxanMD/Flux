import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {profileEditFormSchema} from './profile-edit-form.schema';

export const useProfileEditForm = () => {
  return useForm({
    resolver: yupResolver(profileEditFormSchema),
    defaultValues: profileEditFormSchema.cast({}),
  });
};
