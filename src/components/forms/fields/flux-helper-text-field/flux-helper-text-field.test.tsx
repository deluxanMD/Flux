import React from 'react';
import {reducer} from '../../../../test-utils/test-wrapper/test-wrapper.component';
import FluxHelperTextField from './flux-helper-text-field.component';
import {ThemeProvider} from '@rneui/themed';
import {lightTheme} from '../../../../rn-elements/theme/theme';

describe('<FluxHelperTextField />', () => {
  it('should render the field', () => {
    const {getByTestId} = reducer(
      <ThemeProvider theme={lightTheme}>
        <FluxHelperTextField />
      </ThemeProvider>,
    );

    expect(getByTestId('FluxHelperTextField')).toBeDefined();
  });
});
