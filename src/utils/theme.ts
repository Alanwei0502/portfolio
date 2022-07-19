import { ThemeOptions } from '@mui/material'

export const white = '#EAEAEA';
export const black = '#1A1A1A';
export const grey1 = '#E8E9F1';
export const grey2 = '#CFD0DB';
export const pink1 = '#FAE5DF';
export const pink2 = '#F5CAC2';
export const orangeRed = '#E34A33';
export const blue = '#303179';
export const darkBlue = '#141850';


export const lightMode: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black,
      white
    },
    primary: {
      main: black,
      // light: pink1,
      // dark: blue,
      // contrastText: darkBlue,
    },
    background: {
      paper: white,
      default: grey2
    },
    text: {
      primary: black
    }
  }
}

export const darkMode: ThemeOptions = {
  palette: {
    mode: 'dark',
    common: {
      black,
      white
    },
    primary: {
      main: pink2,
      // light: pink1,
      // dark: orangeRed,
      // contrastText: pink2,
    },
    background: {
      paper: darkBlue,
      default: black
    },
    text: {
      primary: white
    }
  }
}