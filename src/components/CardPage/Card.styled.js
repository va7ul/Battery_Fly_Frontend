import styled from 'styled-components';
import { FaRegHeart, FaHeartCircleCheck } from 'react-icons/fa6';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

// Card

export const Wrapper = styled.div`
  padding: 15px 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 30px 110px;
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
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.secondary};

  @media screen and (min-width: 1280px) {
    font-size: 36px;
    margin-bottom: 10px;
  }
`;

//  ProductPhoto

export const ImageBig = styled.img`
  width: 310px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 1280px) {
    min-width: 518px;
    height: 390px;
    border-radius: 20px;
  }
`;

export const ImageSmall = styled.img`
  width: 50px;
  height: 40px;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 60px;
    border-radius: 8px;
  }
`;

export const Image = styled.img`
  width: 320px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 5px;

  @media screen and (min-width: 1280px) {
    min-width: 518px;
    height: 390px;
    border-radius: 20px;
    margin-bottom: 30px;
  }
`;

export const SliderDiv = styled.div`
  width: 310px;
  padding: 0px 0px 47px 0px;
  margin: 0 auto;

  .slick-dots li {
    width: 50px;
    border-radius: 6px;
  }

  .slick-list {
    cursor: grab;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 1280px) {
    width: 518px;
    height: 400px;
    padding: 0px 0px 62px 0px;
    margin-bottom: 30px;

    .slick-dots {
      bottom: -65px;
    }

    .slick-dots li {
      width: 80px;
      height: 60px;
      border-radius: 12px;
    }

    .slick-prev:before,
    .slick-next:before {
      font-size: 40px;
    }

    .slick-prev {
      left: -45px;
    }
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

  @media screen and (min-width: 1280px) {
  }
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
  color: ${props => props.theme.colors.backgroundPaper};
  transition: ${props => props.theme.transition.main};

  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    width: 38px;
    height: 38px;
  }
`;

export const IconFullHeart = styled(FaHeartCircleCheck)`
  color: ${props => props.theme.colors.backgroundPaper};
  transition: ${props => props.theme.transition.main};

  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    width: 38px;
    height: 38px;
  }
`;

export const LikeBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 14px;
  }
`;

export const Like = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};

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
    fill: ${props => props.theme.colors.secondary};
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
    gap: 14px;
    margin-bottom: 38px;
  }
`;

// Order

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

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
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;

  ${gradientTransitionBtn}

  &::after {
    border-radius: 50%;
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
  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;

  ${gradientTransitionBtn}

  &::after {
    border-radius: 6px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
    height: 60px;
    font-size: 24px;
    border-radius: 20px;

    &::after {
      border-radius: 20px;
    }
  }
`;

export const OrderButton = styled.button`
  width: 170px;
  height: 40px;
  font-size: 15px;
  border-radius: 6px;
  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;

  ${gradientTransitionBtn}

  &::after {
    border-radius: 6px;
  }

  @media screen and (min-width: 1280px) {
    width: 270px;
    height: 60px;
    font-size: 24px;
    border-radius: 20px;

    &::after {
      border-radius: 20px;
    }
  }
`;

// Information

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Subject = styled.h2`
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  background: ${props => props.theme.colors.greyBackgroundPaper};
  border-radius: 12px;
  text-align: center;
  padding: 6px;

  @media screen and (min-width: 1280px) {
    height: 42px;
    font-size: 20px;
  }
`;

export const Info = styled.div`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
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

export const selectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    borderRadius: '6px',
    borderStyle: 'none',
    width: '132px',
    maxHeight: '30px',
    minHeight: '25px',
    border: '1px solid rgb(31, 31, 31)',
    ':hover': { borderColor: 'currentColor', boxShadow: 'none' },
    '@media only screen and (min-width: 1280px)': {
      width: '220px',
      minHeight: '42px',
      borderRadius: '12px',
    },
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    fontSize: '10px',
    width: '132px',
    border: '1px solid rgb(31, 31, 31)',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
      width: '220px',
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
