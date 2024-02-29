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
`;
