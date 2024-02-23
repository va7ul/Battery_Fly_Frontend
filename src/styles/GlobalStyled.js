import { createTheme } from '@mui/material/styles';
import { createGlobalStyle, css } from 'styled-components';
import 'modern-normalize';

export const themeMUI = createTheme({
  breakpoints: {
    values: {
      desktop: 1280,
    },
  },
  palette: {
    secondary: {
      main: 'rgba(244, 170, 0, 1)',
    },
    svgColor: {
      main: 'rgba(255, 187, 37, 1)',
    },
    background: {
      paper: 'rgba(251, 208, 110, 1)',
      default: 'rgba(247, 247, 247, 1)',
    },
    text: {
      primary: 'rgba(31, 31, 31, 1)',
      disabled: 'rgba(157, 157, 157, 1)',
      secondary: 'rgba(165, 165, 165, 1)',
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
      main: 'rgba(247, 247, 247, 1)',
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

// import PoppinsBold from './assets/fonts/Poppins-Bold.ttf';
// import PoppinsMedium from './assets/fonts/Poppins-Medium.ttf';
// import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf';
// import PoppinsSemiBold from './assets/fonts/Poppins-SemiBold.ttf';

// export const theme = createTheme({
// breakpoints: {
//   values: {
//     tablet: 834,
//     desktop: 1440,
//   },
// },
// palette: {
//   white: {
//     main: '#FFFFFF',
//   },
//   blackone: {
//     main: '#050505',
//   },
//   violet: {
//     main: '#B6C3FF',
//   },
//   blacktwo: {
//     main: '#0F0F0F',
//   },
//   litegreen: {
//     main: '#45FFBC',
//   },
//   grey: {
//     main: '#B6B6B6',
//   },
//   greenlite: {
//     main: '#E3FFA8',
//   },
//   greyone: {
//     main: '#292928',
//   },
//   pink: {
//     main: '#FFC4F7',
//   },
//   yellow: {
//     main: '#FFF3B7',
//   },
// },
// });

export const theme = {
  colors: {
    textPrimary: 'rgba(31, 31, 31, 1)',
    textDisabled: 'rgba(157, 157, 157, 1)',
    greyOutput: 'rgba(144, 144, 144, 1)',
    greyPlaysholder: 'rgba(165, 165, 165, 1)',
    secondary: 'rgba(244, 170, 0, 1)',
    svgColor: 'rgba(255, 187, 37, 1)',
    background: 'rgba(247, 247, 247, 1)',
    backgroundPaper: 'rgba(251, 208, 110, 1)',

    gradient: 'linear-gradient(rgba(255, 208, 100, 1), rgba(251, 208, 110, 0))',
    gradientHover:
      'linear-gradient(rgba(255, 177, 0, 1), rgba(251, 208, 110, 0))',
    gradientBlack:
      'linear-gradient(rgba(51, 51, 51, 1), rgba(75, 75, 75, 0.49))',

    warning: 'rgba(228, 219, 0, 1)',
    error: 'rgba(255, 0, 0, 1)',
    success: 'rgba(20, 211, 16, 1)',
  },
  transition: {
    main: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: ${theme.colors.background};
  color: ${theme.colors.textPrimary}; 
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

a
 {
  color: currentColor;
  text-decoration: none;
}

button {
  margin: 0;
  padding: 0;
  cursor: pointer;
}

/* input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
    -moz-appearance: textfield;
     appearance: textfield;
} */
`;

export const hidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
