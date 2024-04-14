import React from 'react';
import TextField from '../fields/text-field/text-field.component';
import DatePickerField from '../fields/date-picker-field/date-picker-field.component';
import PhoneNumberField from '../fields/phone-number-field/phone-number-field.component';
import AddressField from '../fields/address-field/address-field.component';

const ProfileEditForm = () => {
  return (
    <>
      <TextField name="firstName" placeholder="First Name" leftIcon="account" />
      <TextField name="lastName" placeholder="Last Name" leftIcon="account" />
      <DatePickerField name="dateOfBirth" placeholder="Date of Birth" />
      <TextField
        name="email"
        placeholder="Email Address"
        leftIcon="email"
        keyboardType="email-address"
      />
      <PhoneNumberField name="phoneNumber" />
      <AddressField name="address" />
    </>
  );
};

export default ProfileEditForm;
