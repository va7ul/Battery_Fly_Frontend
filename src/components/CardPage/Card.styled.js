import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Wrapper = styled.div`
  padding: 15px 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 30px 110px;
    max-width: 1280px;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.secondary};

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  max-width: 320px;
  height: 330px;
  margin-bottom: 5px;
  border: 1px solid rgb(225, 225, 225);

  @media screen and (min-width: 1280px) {
    max-width: 520px;
    height: 525px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
  }
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const Like = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Desc = styled.p`
  font-size: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 600;
  }
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

export const CounterBox = styled.div`
  display: flex;
  gap: 4px;
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
