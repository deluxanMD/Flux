import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {TextInput, TextInputProps} from 'react-native-paper';
import {View} from 'react-native';
import FluxHelperTextField from '../flux-helper-text-field/flux-helper-text-field.component';
import {useFieldStyles} from '../fields.styles';

export type AddressFieldProps = {
  name: string;
} & TextInputProps;

const AddressField = ({name, ...rest}: AddressFieldProps) => {
  const {control} = useFormContext();
  const fieldStyles = useFieldStyles();

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <>
          <TextInput
            error={!!error}
            value={value}
            placeholder="Address"
            onChangeText={onChange}
            left={<TextInput.Icon icon={'map'} size={20} />}
            right={<TextInput.Icon icon={'target'} size={20} />}
            {...rest}
          />
          <View style={fieldStyles.helperText}>
            {!!error && <FluxHelperTextField message={error?.message} />}
          </View>
        </>
      )}
    />
  );
};

export default AddressField;
