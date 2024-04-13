import {View} from 'react-native';
import React from 'react';
import {useSignupScreenStyles} from './signupscreen.styles';
import HeaderOnlyBack from '../../../components/header-only-back/header-only-back.component';
import {Button, Divider, Text} from '@rneui/themed';
import SignupForm from '../../../components/forms/signup-form/signup-form.component';
import {FormProvider} from 'react-hook-form';
import {useSignupForm} from '../../../components/forms/signup-form/signup-form.hooks';
import FacebookIconButton from '../../../components/forms/fields/social-icon-buttons/facebook-icon-button/facebook-icon-button.component';
import GoogleIconButton from '../../../components/forms/fields/social-icon-buttons/google-icon-button/google-icon-button.component';
import AppleIconButton from '../../../components/forms/fields/social-icon-buttons/apple-icon-button/apple-icon-button.component';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {useSignUpMutation} from '../../../api/auth/auth-api.slice';

const SignupScreen = () => {
  const styles = useSignupScreenStyles();
  const formMethods = useSignupForm();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [signUp] = useSignUpMutation();

  const onSubmit = async (formData: {email: string; password: string}) => {
    try {
      const data = await signUp({
        email: formData.email,
        password: formData.password,
      });
      console.log({data});
    } catch (err) {
      console.log({err});
    }
  };

  return (
    <>
      <HeaderOnlyBack />
      <View testID="Signup" style={styles.container}>
        <Text h1 style={styles.title}>
          Create Your Account
        </Text>
        <FormProvider {...formMethods}>
          <SignupForm />
          <Button
            radius={5}
            size="md"
            onPress={formMethods.handleSubmit(onSubmit)}>
            Sign up
          </Button>
        </FormProvider>
        <Divider style={styles.divider} />
        <View style={styles.socialContainer}>
          {/* <FAB icon={{name: 'add', color: 'white'}} color="green" radius={0} /> */}
          <FacebookIconButton />
          <GoogleIconButton />
          <AppleIconButton />
        </View>
        <View style={styles.singInLink}>
          <Text testID="SignIn.Text">Already have an account?</Text>
          <Button
            testID="SignIn.Link"
            type="clear"
            titleStyle={styles.singInLinkText}
            onPress={() => navigation.navigate('Login')}>
            Sign in
          </Button>
        </View>
      </View>
    </>
  );
};

export default SignupScreen;
