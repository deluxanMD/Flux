import 'react-native';
import React from 'react';
import Onboarding from './onboarding.component';
import {it} from '@jest/globals';
import {
  reducer,
  fireEvent,
} from '../../test-utils/test-wrapper/test-wrapper.component';

const navigation = {
  navigate: () => {},
};

describe('<Onboarding />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<Onboarding navigation={navigation} />);
    const text = getByTestId('Onboarding.Text');
    const button = getByTestId('Onboarding.Button');

    expect(getByTestId('Onboarding')).toBeDefined();
    expect(text.props.children).toBe(
      'We provide professional service at friendly price',
    );
    expect(button).toBeDefined();
  });

  it('should redirect', () => {
    const {getByTestId} = reducer(<Onboarding navigation={navigation} />);
    const button = getByTestId('Onboarding.Button');
    fireEvent(button, 'press');
  });
});
