import styled from 'styled-components';
import { getRotation } from 'styles/GlobalStyled';

export const BatteryButton = styled.button`
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
