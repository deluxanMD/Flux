import {Keyboard, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-neat-date-picker';
import {Controller, useFormContext} from 'react-hook-form';
import {TextInput, TextInputProps} from 'react-native-paper';
import FluxHelperTextField from '../flux-helper-text-field/flux-helper-text-field.component';
import {useFieldStyles} from '../fields.styles';

type Props = {
  name: string;
} & TextInputProps;

const DatePickerField = ({name, ...rest}: Props) => {
  const fieldStyles = useFieldStyles();
  const [visible, setVisible] = useState<boolean>(false);
  const {control, setValue, clearErrors} = useFormContext();

  const handlePressIn = () => {
    Keyboard.dismiss();
    setVisible(true);
  };

  const onConfirmSingle = (output: any) => {
    setVisible(false);
    setValue(name, output.dateString);
    clearErrors(name);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {value}, fieldState: {error}}) => (
        <>
          <TextInput
            error={!!error}
            value={value}
            onPressIn={handlePressIn}
            left={<TextInput.Icon icon="calendar" size={20} />}
            {...rest}
          />
          <View style={fieldStyles.helperText}>
            {!!error && <FluxHelperTextField message={error?.message} />}
          </View>
          <DatePicker
            isVisible={visible}
            mode={'single'}
            onCancel={() => setVisible(false)}
            onConfirm={onConfirmSingle}
            initialDate={new Date('1990-01-01')}
          />
        </>
      )}
    />
  );
};

export default DatePickerField;
