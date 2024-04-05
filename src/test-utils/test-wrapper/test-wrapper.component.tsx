import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';

type Props = {
  children: JSX.Element;
};

const TestWrapper = ({children}: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default TestWrapper;
