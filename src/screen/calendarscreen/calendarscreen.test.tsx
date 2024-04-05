import 'react-native';
import React from 'react';
import CalendarScreen from './calendarscreen.component';
import {it} from '@jest/globals';
import {reducer} from '../../test-utils/test-wrapper/test-wrapper.component';

describe('<CalendarScreen />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<CalendarScreen />);
    expect(getByTestId('CalendarScreen')).toBeDefined();
  });
});
