import React from 'react';
import FacebookButton from './facebook-button.component';
import {reducer} from '../../../../../test-utils/test-wrapper/test-wrapper.component';

describe('<FacebookButton />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<FacebookButton />);
    const container = getByTestId('FacebookButton');
    const button = getByTestId('FacebookButton.Button');
    const icon = getByTestId('FacebookButton.Icon');

    expect(container).toBeDefined();
    expect(button).toBeDefined();
    expect(icon).toBeDefined();
  });
});
