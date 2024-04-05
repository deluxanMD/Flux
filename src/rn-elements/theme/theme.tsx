import {createTheme} from '@rneui/themed';

export const lightTheme = createTheme({
  lightColors: {
    primary: '#7210FF',
    secondary: '#FFC02D',
  },
  mode: 'light',
});

export const darkTheme = createTheme({
  darkColors: {
    primary: '#ff0000',
    secondary: '#FFC02D',
  },
  mode: 'dark',
});
