import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {TextInput, TextInputProps} from 'react-native-paper';
import {View} from 'react-native';
import FluxHelperTextField from '../flux-helper-text-field/flux-helper-text-field.component';
import {useFieldStyles} from '../fields.styles';

type Props = {
  name: string;
  leftIcon?: string;
  rightIcon?: string;
} & TextInputProps;

const TextField = ({name, leftIcon, rightIcon, ...rest}: Props) => {
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
            onChangeText={onChange}
            left={!!leftIcon && <TextInput.Icon icon={leftIcon} size={20} />}
            right={!!rightIcon && <TextInput.Icon icon={rightIcon} size={20} />}
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

export default TextField;
