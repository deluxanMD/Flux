import 'react-native';
import React from 'react';
import App from './App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {reducer} from './test-utils/test-wrapper/test-wrapper.component';
import {act} from 'react-test-renderer';
import {store} from './redux/store';
import {toggleTheme} from './redux/app/app.slice';

jest.useFakeTimers();

describe('<App />', () => {
  it('should handles theme toggle', () => {
    reducer(<App />);

    expect(store.getState().app.mode).toEqual('light');

    act(() => {
      store.dispatch(toggleTheme());
    });
    expect(store.getState().app.mode).toEqual('dark');

    act(() => {
      store.dispatch(toggleTheme());
    });
    expect(store.getState().app.mode).toEqual('light');
  });
});
