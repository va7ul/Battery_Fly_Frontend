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
  }
`;

export const Btn = styled.button`
  max-width: 152px;
  margin-top: 12px;
  margin-left: 67px;
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
    &::after {
    }
  }
`;
