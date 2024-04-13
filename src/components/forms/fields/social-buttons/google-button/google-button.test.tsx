import React from 'react';
import AppleButton from '../apple-button/apple-button.component';
import {reducer} from '../../../../../test-utils/test-wrapper/test-wrapper.component';

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
