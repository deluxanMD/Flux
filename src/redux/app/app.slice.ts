import {createSlice} from '@reduxjs/toolkit';

export interface AppState {
  mode: 'light' | 'dark';
}

const initialState: AppState = {
  mode: 'light',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: state => {
      if (state.mode === 'light') {
        state.mode = 'dark';
      } else {
        state.mode = 'light';
      }
    },
  },
});

// ACTIONS
export const {toggleTheme} = appSlice.actions;

export default appSlice.reducer;
