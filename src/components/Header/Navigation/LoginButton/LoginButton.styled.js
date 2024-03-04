import styled from 'styled-components';
import { gradientTransitionBtn } from '../../../../styles/GlobalStyled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  background-image: ${props => props.theme.colors.gradient};

  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 10px;
  }
`;
