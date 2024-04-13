import React from 'react';
import TextField from '../fields/text-field/text-field.component';
import PasswordField from '../fields/password-field/password-field.component';

const SignupForm = () => {
  return (
    <>
      <TextField
        name="email"
        placeholder="Email Address"
        leftIcon="email"
        keyboardType="email-address"
      />
      <PasswordField name="password" placeholder="Password" />
      <PasswordField name="confirmPassword" placeholder="Confirm Password" />
    </>
  );
};

export default SignupForm;
