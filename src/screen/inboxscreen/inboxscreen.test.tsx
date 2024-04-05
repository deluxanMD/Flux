import 'react-native';
import React from 'react';
import InboxScreen from './inboxscreen.component';
import {it} from '@jest/globals';
import {reducer} from '../../test-utils/test-wrapper/test-wrapper.component';

describe('<InboxScreen />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<InboxScreen />);
    expect(getByTestId('InboxScreen')).toBeDefined();
  });
});
