import { createTheme } from '@mui/material/styles';
import { createGlobalStyle, css } from 'styled-components';
import 'modern-normalize';

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
      main: 'rgba(244, 170, 0, 1)',
    },
    // svgColor: {
    //   main: 'rgba(251, 208, 110, 1)', поки не використовується
    // },
    background: {
      paper: 'rgba(244, 170, 0, 0.8)',
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

export const theme = {
  colors: {
    textPrimary: 'rgba(31, 31, 31, 1)', // колір тексту чорний
    textDisabled: 'rgba(157, 157, 157, 1)', //колір плейсхолдерів, неактивного тексту світло сірий
    greyOutput: 'rgba(144, 144, 144, 1)', // ??? поки не використовується
    greyPlaysholder: 'rgba(165, 165, 165, 1)', // ??? поки не використовується
    greyBackgroundPaper: 'rgba(225, 225, 225, 1)', // колір фону нотаток світло сірий
    secondary: 'rgba(244, 170, 0, 1)', // колір ел. при ховері, активних посилань та заливки svg темно оранжевий
    backgroundPaper: 'rgba(244, 170, 0, 0.8)', // колір кнопок та ел. без ховера світло оранжевий
    background: 'rgba(247, 247, 247, 1)', // колір фону сторінки білий
    hoverColor: 'rgba(251, 208, 110, 1)', // використовується для піднавігації

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
    main: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
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

h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
    margin-bottom: 0;
}

ul, ol, li {
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
  transition: ${theme.transition.main};
}

button {
  margin: 0;
  padding: 0;
  border: transparent;
  cursor: pointer;
  transition: ${theme.transition.main};    
  color: ${theme.colors.textPrimary};
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
    -moz-appearance: textfield;
     appearance: textfield;
}
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

export const gradientTransitionCard = css`
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(rgba(255, 225, 156, 1), rgba(251, 208, 110, 0));
    transition: ${theme.transition.main};
    z-index: 1;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }

  div {
    position: relative;
    z-index: 2;
  }
`;

// встав змінну нижче в css свого елемента для transition з градієнтом!!!
export const gradientTransitionBtn = css`
  // position: relative; додай на свій елемент ховеру
  // z-index: 0; додай на свій елемент ховеру

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props =>
      props.disabled
        ? props.theme.colors.greyBackgroundPaper
        : props.theme.colors.gradient};
    transition: ${theme.transition.main};
    z-index: 1;
    opacity: 0;
    //   &::after {border-radius: 20px;} - додай свій радіус таким чином
  }

  &:hover::after {
    opacity: 1;
  }

  //і перенеси весь свій контент всередину div
  div {
    position: relative;
    z-index: 2;
  }
`;

export const getSectionBackground = props => {
  if (props.category === 'Акції') {
    return 'linear-gradient(rgba(200, 200, 200, 0.04),rgba(255, 222, 147, 0.65),rgba(99, 99, 99, 0))';
  }
  return 'inherit';
};
