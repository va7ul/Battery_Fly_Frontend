import styled from 'styled-components';
import { gradientTransitionBtn } from '../../../styles/GlobalStyled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  font-size: 10px;

  background-image: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media (min-width: 1280px) {
    position: relative;
    margin-left: 110px;
    padding: 16px 38px;
    border-radius: 12px;
    font-size: 24px;
    background: ${props => props.theme.colors.gradient};

    &::after {
      border-radius: 12px;
    }
  }
`;
