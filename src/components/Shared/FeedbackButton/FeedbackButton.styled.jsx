import styled from 'styled-components';
import { gradientTransitionBtn } from '../../../styles/GlobalStyled';

export const Button = styled.button`
  display: flex;

  align-items: center;
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  transition: background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 10px;

  background-image: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }
`;
