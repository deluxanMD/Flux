import React from 'react';
import LetsYouIn from './letsyouin.component';
import {reducer} from '../../test-utils/test-wrapper/test-wrapper.component';

describe('<LetsYouIn />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(<LetsYouIn />);
    const container = getByTestId('LetsYouIn');
    const title = getByTestId('LetsYouIn.Title');
    const signinBtn = getByTestId('LetsYouIn.Signin.Button');
    const signupText = getByTestId('LetsYouIn.Signup.Text');
    const signupLink = getByTestId('LetsYouIn.Signup.Link');

    expect(container).toBeDefined();
    expect(title.props.children).toEqual("Let's You In");
    expect(getByTestId('FacebookButton')).toBeDefined();
    expect(getByTestId('GoogleButton')).toBeDefined();
    expect(getByTestId('AppleButton')).toBeDefined();
    expect(signinBtn).toBeDefined();
    expect(signupText.props.children).toEqual("Don't have an account?");
    expect(signupLink).toBeDefined();
  });
});
