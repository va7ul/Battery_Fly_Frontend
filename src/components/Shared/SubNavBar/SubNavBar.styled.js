import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { getRotation } from 'styles/GlobalStyled';

export const StyledNav = styled.nav`
  padding: 30px 110px 0px;
`;

export const StyledList = styled.ul`
  height: 74px;
  display: flex;
  place-items: center;
  place-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: ${props => props.theme.colors.gradientSubNavGrey};

  li:not(:nth-last-child(-n + 2)) {
    position: relative;
    display: flex;

    &:after {
      content: '';
      position: absolute;
      background: ${props => props.theme.colors.greyBackgroundPaper};
      width: 1px;
      height: 50px;
      right: -1px;
      top: 12px;
    }
  }

  li:last-child {
    font-size: 16px;
    width: 99.1px;

    background: ${props => props.theme.colors.hoverColor};
    border-radius: 0px 20px 20px 0px;
  }

  li:first-child {
    border-radius: 20px 0px 0px 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 28px 6px;
  border-radius: inherit;
  &.active {
    background: ${props => props.theme.colors.secondary};
    box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;

  & svg {
    transform: ${getRotation};
    width: 11px;
    height: 11px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
    transition: ${props => props.theme.transition.main};
  }

  &:hover svg {
    transform: rotate(270deg) scale(1.4);
  }
`;
