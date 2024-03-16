import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
  margin-left: auto;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Total = styled.span`
  margin-left: 10px;
  font-size: 16px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;

  @media screen and (min-width: 1280px) {
    justify-content: space-around;
  }
`;

export const Button = styled.button`
  padding: 12px;
  border-radius: 6px;
  font-size: 12px;
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
    padding: 15px 8px;
    font-size: 15px;
  }
`;
