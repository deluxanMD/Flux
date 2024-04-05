import React from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import appReducer from '../../redux/app/app.slice';
import {FormProvider} from 'react-hook-form';

function reducer(
  ui,
  {
    preloadedState,
    store = configureStore({reducer: {app: appReducer}, preloadedState}),
    ...renderOptions
  } = {},
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

const TestFormWrapper = ({children, formMethods}) => {
  reducer(<FormProvider {...formMethods}>{children}</FormProvider>);
};

export * from '@testing-library/react-native';
export {reducer, TestFormWrapper};
