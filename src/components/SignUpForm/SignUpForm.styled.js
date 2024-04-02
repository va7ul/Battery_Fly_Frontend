import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

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
    gap: 30px;
    padding-bottom: 42px;
    margin-left: 78px;
    margin-right: 78px;
  }
`;

export const Btn = styled.button`
  max-width: 152px;
  margin-left: 54px;
  padding: 12px 20px;
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
    margin-left: 116px;
    padding: 16px 18px;
    border-radius: 12px;
    border: none;
    font-size: 24px;
    font-weight: 400;

    &::after {
      border-radius: 12px;
    }
  }
`;


export const Text = styled.p`
  font-size: 9px;

  @media (min-width: 1280px) {
    font-size: 11px;
  }
`;