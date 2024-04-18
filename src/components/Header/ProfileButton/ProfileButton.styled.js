import styled from 'styled-components';
import { getRotation } from 'styles/GlobalStyled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  border-radius: 6px;
  padding: 3px;
  min-width: 100px;
  gap: 2px;
  background-color: ${props => props.theme.colors.secondary};
  transition: ${props => props.theme.transition.main};

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    padding: 7px;
    gap: 5px;
    min-width: 112px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;

  & svg {
    transform: ${getRotation};
    width: 9px;
    height: 9px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
    transition: ${props => props.theme.transition.main};
  }

  &:hover svg {
    transform: rotate(270deg) scale(1.4);
  }

  @media screen and (min-width: 1280px) {
    & svg {
      width: 11px;
      height: 11px;
    }
  }
`;
