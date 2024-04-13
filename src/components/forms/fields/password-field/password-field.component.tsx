import React, {useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {View} from 'react-native';
import {TextInput, TextInputProps} from 'react-native-paper';
import FluxHelperTextField from '../flux-helper-text-field/flux-helper-text-field.component';
import {useFieldStyles} from '../fields.styles';

type Props = {
  name: string;
} & TextInputProps;

const PasswordField = ({name, ...rest}: Props) => {
  const {control} = useFormContext();
  const [isSecured, setIsSecured] = useState(true);
  const fieldStyles = useFieldStyles();

  const handleEyePressed = () => {
    setIsSecured(!isSecured);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <>
          <TextInput
            secureTextEntry={isSecured}
            error={!!error}
            value={value}
            onChangeText={onChange}
            testID="PasswordField"
            left={<TextInput.Icon icon="lock" size={20} />}
            right={
              <TextInput.Icon
                icon={isSecured ? 'eye' : 'eye-off'}
                size={20}
                onPress={handleEyePressed}
                testID="PasswordField.Eye.Icon"
              />
            }
            {...rest}
          />
          <View style={fieldStyles.helperText}>
            {!!error && (
              <FluxHelperTextField
                message={error?.message}
                testID="PasswordField.HelperText"
              />
            )}
          </View>
        </>
      )}
    />
  );
};

export default PasswordField;
