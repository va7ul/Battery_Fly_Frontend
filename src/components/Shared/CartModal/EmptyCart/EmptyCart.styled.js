import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45%;
`;

export const CartIcon = styled.svg`
  width: 91px;
  height: 91px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    width: 111px;
    height: 111px;
    margin-bottom: 25px;
  }

  fill: ${props => props.theme.colors.backgroundPaper};
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 400;
  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);
  background: ${props => props.theme.colors.gradient};

  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 10px;
    margin-top: 30px;
    font-size: 16px;
  }
`;
