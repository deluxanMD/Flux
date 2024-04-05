import 'react-native';
import React from 'react';
import BookingScreen from './bookingscreen.component';
import {it} from '@jest/globals';
import {reducer} from '../../test-utils/test-wrapper/test-wrapper.component';

describe('<BookingScreen />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<BookingScreen />);
    expect(getByTestId('BookingScreen')).toBeDefined();
  });
});
