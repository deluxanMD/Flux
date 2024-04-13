import {ThemeProvider} from '@rneui/themed';
import React from 'react';
import {lightTheme} from '../../../../rn-elements/theme/theme';
import PasswordField from './password-field.component';
import {
  fireEvent,
  reducer,
} from '../../../../test-utils/test-wrapper/test-wrapper.component';
import {FormProvider, useForm} from 'react-hook-form';

jest.useFakeTimers();

const TestComponent = () => {
  const formMethods = useForm();

  return (
    <ThemeProvider theme={lightTheme}>
      <FormProvider {...formMethods}>
        <PasswordField name="testField" />
      </FormProvider>
    </ThemeProvider>
  );
};

describe('<PasswordField />', () => {
  it('should render the field', () => {
    const {getByTestId} = reducer(<TestComponent />);
    expect(getByTestId('PasswordField')).toBeDefined();
  });

  it('should toggle between text and password', () => {
    const {getByTestId} = reducer(<TestComponent />);
    const container = getByTestId('PasswordField');
    const icon = getByTestId('PasswordField.Eye.Icon');
    expect(container.props.secureTextEntry).toBe(true);
    fireEvent(icon, 'press');
    expect(container.props.secureTextEntry).toBe(false);
  });
});
