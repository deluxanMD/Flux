import {View} from 'react-native';
import React from 'react';
import HeaderOnlyBack from '../../components/header-only-back/header-only-back.component';
import {useProfileEditStyles} from './profile-edit-screen.styles';
import ProfileEditForm from '../../components/forms/profile-edit-form/profile-edit-form.component';
import {FormProvider} from 'react-hook-form';
import {Button} from '@rneui/themed';
import {useProfileEditForm} from '../../components/forms/profile-edit-form/profile-edit-form.hooks';

const ProfileEditScreen = () => {
  const styles = useProfileEditStyles();
  const formMethods = useProfileEditForm();

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <>
      <HeaderOnlyBack title="Fill Your Profile" />
      <View testID="ProfileEditScreen" style={styles.container}>
        <FormProvider {...formMethods}>
          <View style={styles.formContainer}>
            <ProfileEditForm />
          </View>
          <Button
            radius={5}
            size="md"
            onPress={formMethods.handleSubmit(onSubmit)}>
            Continue
          </Button>
        </FormProvider>
      </View>
    </>
  );
};

export default ProfileEditScreen;
