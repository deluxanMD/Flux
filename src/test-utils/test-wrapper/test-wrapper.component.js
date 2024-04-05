import React from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import appReducer from '../../redux/app/app.slice';

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

export * from '@testing-library/react-native';
export {reducer};
