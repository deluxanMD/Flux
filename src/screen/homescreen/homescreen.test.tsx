import 'react-native';
import React from 'react';
import HomeScreen from './homescreen.component';
import {it} from '@jest/globals';
import {reducer} from '../../test-utils/test-wrapper/test-wrapper.component';

describe('<HomeScreen />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<HomeScreen />);
    expect(getByTestId('HomeScreen')).toBeDefined();
  });
});
