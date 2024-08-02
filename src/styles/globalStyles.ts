import { createGlobalStyle, css } from 'styled-components';
import 'modern-normalize';
import { theme } from './theme';
import { Props, PropsGetRotation } from '../@types/globalStyles.types';

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
    background: linear-gradient(
      rgba(255, 225, 156, 1),
      rgba(251, 208, 110, 0.3)
    );
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

export const getSectionBackground = (props: Props): string => {
  if (props.category === 'Акції') {
    return `${props.theme.colors.gradientBackground}`;
  }
  return 'inherit';
};

export const getRotation = (props: PropsGetRotation): string => {
  if (props.handleOpen) {
    return `rotate(90deg)`;
  }
  return 'rotate(270deg)';
};
