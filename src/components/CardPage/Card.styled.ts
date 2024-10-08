import { FaRegHeart, FaHeartCircleCheck } from 'react-icons/fa6';
import { StylesConfig, GroupBase } from 'react-select';
import styled from 'styled-components';

interface Theme {
  colors: {
    greyBackgroundPaper: string;
    secondary: string;
    hoverColor: string;
    textDisabled: string;
    textPrimary: string;
  };
}

interface ButtonProps {
  disabled: boolean;
  theme: Theme;
}

const backgroundButton = (props: ButtonProps) =>
  props.disabled
    ? props.theme.colors.greyBackgroundPaper
    : props.theme.colors.secondary;

const backgroundHoverButton = (props: ButtonProps) =>
  props.disabled
    ? props.theme.colors.greyBackgroundPaper
    : props.theme.colors.hoverColor;

const cursorButton = (props: ButtonProps) => (props.disabled ? 'default' : 'pointer');
const colorButton = (props: ButtonProps) =>
  props.disabled
    ? props.theme.colors.textDisabled
    : props.theme.colors.textPrimary;

// Card

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px 0 110px;
    max-width: 1280px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Case = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.hoverColor};

  @media screen and (min-width: 1280px) {
    font-size: 36px;
    margin-bottom: 10px;
  }
`;

// Description

export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    gap: 20px;
    margin-bottom: 30px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width: 1280px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const NewPrice = styled.p`
  font-size: 15px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const Price = styled.p`
  text-decoration-line: line-through;
  font-size: 10px;
  color: rgba(157, 157, 157, 1);

  @media screen and (min-width: 1280px) {
    font-size: 22px;
  }
`;

export const IconHeart = styled(FaRegHeart)`
  @media screen and (min-width: 1280px) {
    width: 38px;
    height: 38px;
  }
`;

export const IconFullHeart = styled(FaHeartCircleCheck)`
  @media screen and (min-width: 1280px) {
    width: 38px;
    height: 38px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 14px;
  }
`;

export const LikeBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.hoverColor};

  &:hover,
  :focus {
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    gap: 14px;
  }
`;

export const Like = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${props => props.theme.colors.hoverColor};

  &:hover,
  :focus {
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const IconSquare = styled.svg`
  display: none;
  /* width: 35px;
  height: 35px;
  position: absolute;
  top: -387px;
  left: 122px;
  fill: ${props => props.theme.colors.secondary}; */

  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    fill: ${props => props.theme.colors.hoverColor};
    width: 62px;
    height: 62px;
    left: 438px;
    top: -12px;
    z-index: 2;
  }
`;

export const IconSpiral = styled.svg`
  display: none;
  /* width: 35px;
  height: 43px;
  position: absolute;
  top: -381px;
  left: 105px;
  stroke: ${props => props.theme.colors.textPrimary};
  fill: transparent; */

  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    width: 62px;
    height: 76px;
    left: 407px;
    top: -1px;
    z-index: 2;
    stroke: ${props => props.theme.colors.textPrimary};
    fill: transparent;
  }
`;

export const Desc = styled.ul`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Item = styled.li`
  list-style: outside;
  margin-left: 16px;
`;

// CheckBox

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    gap: 20px;
    margin-bottom: 38px;
  }
`;
export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1280px) {
  }
`;

export const ExtraPrice = styled.p`
  font-size: 10px;
  color: ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

// Order

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
    margin-bottom: 0px;
  }
`;

export const CounterBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const Input = styled.input`
  font-size: 15px;
  width: 76px;
  height: 35px;
  padding: 8px 12px;
  appearance: none;
  border: none;
  outline-style: none;
  text-align: center;
  border-radius: 190px;
  background: ${props => props.theme.colors.greyBackgroundPaper};

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    width: 90px;
    height: 50px;
    padding: 14px 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${backgroundButton};
  cursor: ${cursorButton};
  color: ${colorButton};

  &:hover,
  :focus {
    background: ${backgroundHoverButton};
  }

  @media screen and (min-width: 1280px) {
    width: 50px;
    height: 50px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const BasketButton = styled.button`
  width: 130px;
  height: 40px;
  font-size: 15px;
  border-radius: 6px;
  background: ${backgroundButton};
  cursor: ${cursorButton};
  color: ${colorButton};

  &:hover,
  :focus {
    background: ${backgroundHoverButton};
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
    height: 60px;
    font-size: 24px;
    border-radius: 20px;
  }
`;

export const OrderButton = styled.button`
  width: 170px;
  height: 40px;
  font-size: 15px;
  border-radius: 6px;
  background: ${backgroundButton};
  cursor: ${cursorButton};
  color: ${colorButton};

  &:hover,
  :focus {
    background: ${backgroundHoverButton};
  }

  @media screen and (min-width: 1280px) {
    width: 270px;
    height: 60px;
    font-size: 24px;
    border-radius: 20px;
  }
`;

// Capacity

export const CapacityBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const selectStyles: StylesConfig<any, false, GroupBase<any>> = {
  control: styles => ({
    ...styles,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    borderRadius: '6px',
    borderStyle: 'none',
    width: '140px',
    maxHeight: '30px',
    minHeight: '25px',
    border: '1px solid rgb(31, 31, 31)',
    ':hover': { borderColor: 'currentColor', boxShadow: 'none' },
    '@media only screen and (min-width: 1280px)': {
      width: '226px',
      minHeight: '42px',
      borderRadius: '12px',
    },
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    fontSize: '10px',
    width: '140px',
    border: '1px solid rgb(31, 31, 31)',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
      width: '226px',
      borderRadius: '12px',
    },
  }),
  input: styles => ({ ...styles, display: 'none' }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? 'rgb(255, 208, 100)' : undefined,
      color: !isDisabled
        ? isSelected
          ? 'rgb(31, 31, 31);'
          : 'rgb(31, 31, 31);'
        : undefined,
      cursor: isDisabled ? 'not-allowed' : 'default',
      padding: '2px 8px',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? 'rgb(255, 208, 100)'
            : 'rgb(255, 208, 100)'
          : undefined,
      },
      '@media only screen and (min-width: 1280px)': {
        borderRadius: '6px',
      },
    };
  },
  placeholder: styles => ({
    ...styles,
    fontSize: '10px',
    padding: '0px 8px',
    margin: 0,
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
    },
  }),
  indicatorsContainer: styles => ({
    ...styles,
    height: '30px',
    width: '38px',
    '@media only screen and (min-width: 1280px)': {
      height: '42px',
      width: '40px',
    },
  }),
  valueContainer: styles => ({ ...styles, padding: 0 }),
  singleValue: styles => ({
    ...styles,
    fontSize: '10px',
    margin: 0,
    padding: '8px',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
    },
  }),
};
