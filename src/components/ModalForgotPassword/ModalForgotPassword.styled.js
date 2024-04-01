import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  padding-top: 36px;
  margin: 0px 100px 40px 100px;

  @media (min-width: 1280px) {
    font-size: 20px;
    padding-top: 40px;
    margin: 0px 210px 50px 210px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 261px;
  gap: 16px;
  padding-bottom: 38px;
  margin-left: 48px;
  margin-right: 48px;

  @media (min-width: 1280px) {
    width: 476px;
    gap: 26px;
    padding-bottom: 40px;
    margin-left: 78px;
    margin-right: 78px;
  }
`;

export const Btn = styled.button`
  max-width: 160px;
  margin-left: 54px;
  padding: 12px 34px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 500;

  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media (min-width: 1280px) {
    max-width: 240px;
    margin-left: 118px;
    padding: 16px 54px;
    border-radius: 12px;
    border: none;
    font-size: 24px;
    font-weight: 400;

    &::after {
      border-radius: 12px;
    }
  }
`;
