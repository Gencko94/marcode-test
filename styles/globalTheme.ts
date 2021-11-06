import { ThemeOptions } from '@mui/material';
import { COLOR_MODES } from '../src/lib/interfaces/general';
import { PRIMARY_COLOR } from '../src/lib/constants';

export const getDesignTokens = (mode: COLOR_MODES): ThemeOptions => ({
  typography: {
    fontFamily: 'Yaldevi, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar-track': {
          WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
          borderRadius: '10px',
          backgroundColor: '#777',
        },
        '*::-webkit-scrollbar': {
          width: '6px',
          height: '6px',
          backgroundColor: PRIMARY_COLOR,
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
          boxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
          backgroundColor: PRIMARY_COLOR,
          transition: 'background 150ms ease',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: PRIMARY_COLOR,
        },
      },
    },
  },
  shape: { borderRadius: 6 },
  ...(mode === 'light' ? getLightTheme() : getDarkTheme()),
});
export const getLightTheme = (): ThemeOptions => ({
  palette: {
    primary: { main: PRIMARY_COLOR, light: '#1eb3e1', dark: '#ff008c' },
    secondary: { main: '#12345' },
    mode: 'light',
    // background: { default: '#f1f1f1' },
  },
});
export const getDarkTheme = (): ThemeOptions => ({
  palette: {
    primary: { main: '#fb81d0', light: '#fb81d0', dark: '#ff008c' },
    secondary: { main: '#ffdc81' },
    mode: 'dark',
    background: { paper: '#35182B', default: '#251520' },
  },
});
