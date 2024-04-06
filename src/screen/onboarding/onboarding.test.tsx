import 'react-native';
import React from 'react';
import Onboarding from './onboarding.component';
import {it} from '@jest/globals';
import {reducer} from '../../test-utils/test-wrapper/test-wrapper.component';

describe('<Onboarding />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<Onboarding />);
    const text = getByTestId('Onboarding.Text');
    const button = getByTestId('Onboarding.Button');

    expect(getByTestId('Onboarding')).toBeDefined();
    expect(text.props.children).toBe(
      'We provide professional service at friendly price',
    );
    expect(button).toBeDefined();
  });
});
