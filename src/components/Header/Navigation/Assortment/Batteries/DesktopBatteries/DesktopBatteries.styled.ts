import { getRotation } from 'styles/globalStyles';
import styled from 'styled-components';

type BatteryButtonProps = {
  handleOpen?: HTMLElement | null;
}

export const BatteryButton = styled.button<BatteryButtonProps>`
   display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  margin-right: 20px;
  margin-left: auto;

  & svg {
    transform: ${getRotation};
    width: 16px;
    height: 16px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
    transition: ${props => props.theme.transition.main};
  }

  &:hover svg {
    stroke: ${props => props.theme.colors.hoverColor};
    transform: rotate(270deg) scale(1.4);
  }
`;
