import { createTheme, TypeBackground } from '@mui/material/styles';
// import { PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  // interface Palette {
  //   hoverColor?: PaletteColorOptions;
  // }

  // interface PaletteOptions {
  //   hoverColor?: PaletteColorOptions;
  // }

    interface Palette {
      hoverColor: Palette['primary'];
    }
    interface PaletteOptions {
      hoverColor: PaletteOptions['primary'];
    }

  interface BreakpointOverrides {
    xs: true;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

export const themeMUI = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      mobile: 360,
      desktop: 1280,
    },
  },
  palette: {
    secondary: {
      main: 'rgba(251, 208, 110, 1)',
    },
    hoverColor: {
      main: 'rgba(244, 170, 0, 1)',
    },
    background: {
      paper: 'rgba(225, 225, 225, 1)',
      default: 'rgba(247, 247, 247, 1)',
      primary: 'rgba(213, 213, 213, 0.54)',
    } as Partial<TypeBackground>,
    text: {
      primary: 'rgba(31, 31, 31, 1)',
      disabled: 'rgba(157, 157, 157, 1)',
    },
    warning: {
      main: 'rgba(228, 219, 0, 1)',
    },
    error: {
      main: 'rgba(255, 0, 0, 1)',
    },
    success: {
      main: 'rgba(20, 211, 16, 1)',
    },
    primary: {
      main: 'rgba(244, 170, 0, 1)',
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 20,
    htmlFontSize: 20,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h2: {
      fontWeight: 700,
    },
  },
});
