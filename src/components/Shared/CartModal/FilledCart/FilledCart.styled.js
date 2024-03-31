import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Wrap = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-left: auto;
  margin-top: 15px;

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
  gap: 15px;

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Button = styled.button`
  padding: 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  width: 149px;

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
    width: 188px;
  }
`;
