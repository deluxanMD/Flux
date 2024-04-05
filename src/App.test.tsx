import 'react-native';
import React from 'react';
import App from './App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import TestWrapper from './test-utils/test-wrapper/test-wrapper.component';

describe('<App />', () => {
  it('renders correctly', () => {
    renderer.create(
      <TestWrapper>
        <App />
      </TestWrapper>,
    );
  });
});
