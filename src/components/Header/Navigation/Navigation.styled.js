import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  font-size: 15px;
  color: ${props => props.theme.colors.textPrimary};
  /* transition: color ${props => props.theme.transition.main}; */

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 1280px) {
    font-weight: 600;
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Nav = styled.nav`
  justify-content: start;
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
