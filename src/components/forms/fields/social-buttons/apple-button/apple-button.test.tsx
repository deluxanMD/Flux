import React from 'react';
import {reducer} from '../../../../../test-utils/test-wrapper/test-wrapper.component';
import AppleButton from './apple-button.component';

describe('<AppleButton />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<AppleButton />);
    const container = getByTestId('AppleButton');
    const button = getByTestId('AppleButton.Button');
    const icon = getByTestId('AppleButton.Icon');

    expect(container).toBeDefined();
    expect(button).toBeDefined();
    expect(icon).toBeDefined();
  });
});
