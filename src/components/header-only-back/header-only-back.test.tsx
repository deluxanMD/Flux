import React from 'react';
import HeaderOnlyBack from './header-only-back.component';
import {
  fireEvent,
  reducer,
} from '../../test-utils/test-wrapper/test-wrapper.component';
import {NavigationContainer} from '@react-navigation/native';

describe('<HeaderOnlyBack />', () => {
  it('should render', () => {
    const {getByTestId} = reducer(
      <NavigationContainer>
        <HeaderOnlyBack />
      </NavigationContainer>,
    );
    const container = getByTestId('HeaderOnlyBack');
    const icon = getByTestId('HeaderOnlyBack.Icon');

    expect(container).toBeDefined();
    expect(icon).toBeDefined();
    fireEvent(icon, 'press');
  });
});
