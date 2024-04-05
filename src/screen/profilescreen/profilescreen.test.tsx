import 'react-native';
import React from 'react';
import ProfileScreen from './profilescreen.component';
import {it} from '@jest/globals';
import {reducer} from '../../test-utils/test-wrapper/test-wrapper.component';

describe('<ProfileScreen />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<ProfileScreen />);
    expect(getByTestId('ProfileScreen')).toBeDefined();
  });
});
