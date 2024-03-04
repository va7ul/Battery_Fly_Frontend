import styled from 'styled-components';
import { gradientTransitionBtn } from '../../../../styles/GlobalStyled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 3px;
  width: 120px;
  border-radius: 10px;
  background-image: ${props => props.theme.colors.gradient};
  gap: 5px;

  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  z-index: 2;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  z-index: 2;

  & svg {
    rotate: 270deg;
    width: 10px;
    height: 10px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
  }
`;
