import {View} from 'react-native';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {useFieldStyles} from '../fields.styles';
import FluxHelperTextField from '../flux-helper-text-field/flux-helper-text-field.component';
import {TextInput} from 'react-native-paper';

type Props = {
  name: string;
};

const PhoneNumberField = ({name, ...rest}: Props) => {
  const {control} = useFormContext();
  const fieldStyles = useFieldStyles();

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {value, onChange}, fieldState: {error}}) => {
        return (
          <>
            <TextInput
              error={!!error}
              value={value}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              onChangeText={onChange}
              left={<TextInput.Icon icon={'phone'} size={20} />}
              {...rest}
            />
            <View style={fieldStyles.helperText}>
              {!!error && <FluxHelperTextField message={error?.message} />}
            </View>
          </>
        );
      }}
    />
  );
};

export default PhoneNumberField;
