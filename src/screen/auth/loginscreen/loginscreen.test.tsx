import 'react-native';
import React from 'react';
import LoginScreen from './loginscreen.component';
import {it} from '@jest/globals';
import {reducer} from '../../../test-utils/test-wrapper/test-wrapper.component';

describe('<LoginScreen />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<LoginScreen />);
    expect(getByTestId('LoginScreen')).toBeDefined();
  });
});
