import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 15px;
  transition: color ${props => props.theme.transition.main};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &.active {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 1280px) {
    font-weight: 600;
  }
`;

export const Nav = styled.nav`
  justify-content: start;
  @media screen and (min-width: 1280px) {
    margin-left: 57px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  @media screen and (min-width: 1280px) {
    gap: 30px;
    flex-direction: row;
  }
`;
