import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledList = styled.ul`
  display: grid;
  width: fit-content;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }

  li:last-child {
    a > span {
      &::after {
        display: none;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  transition: ${props => props.theme.transition.main};

  svg {
    width: 20px;
    height: 20px;

    @media screen and (min-width: 1280px) {
      width: 24px;
      height: 24px;
    }
  }

  span {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      background: ${props => props.theme.colors.textPrimary};
      width: 68px;
      height: 1px;
      left: 0px;
      bottom: -6px;
      transition: ${props => props.theme.transition.main};

      @media screen and (min-width: 1280px) {
        width: 96px;
        bottom: -9px;
      }
    }
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};

    span {
      &::after {
        background: ${props => props.theme.colors.hoverColor};
      }
    }
  }

  &.active {
    color: ${props => props.theme.colors.hoverColor};

    span {
      &::after {
        background: ${props => props.theme.colors.hoverColor};
      }
    }
  }
`;
