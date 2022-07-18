import { ThemeOptions } from '@mui/material'

const color1 = '#E7E7E4';
const color2 = '#E2DDD5';
const color3 = '#AB9E95';
const color4 = '#6E615A';
const color5 = '#585858';
const color6 = '#191919';

export const lightMode: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black: color6,
      white: color1
    },
    primary: {
      main: color4,
      light: color2,
      dark: color6,
      contrastText: color1,
    },
    background: {
      paper: color2,
      default: color1
    },
    text: {
      primary: color6
    }
  }
}

export const darkMode: ThemeOptions = {
  palette: {
    mode: 'dark',
    common: {
      black: color6,
      white: color1
    },
    primary: {
      main: color3,
      light: color1,
      dark: color5,
      contrastText: color6,
    },
    background: {
      paper: color5,
      default: color6
    },
    text: {
      primary: color1
    }
  }
}