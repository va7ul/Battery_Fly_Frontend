import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-left: 57px;
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 600;
  z-index: 2;

  @media screen and (min-width: 1280px) {
    padding: 34px 0;
    color: ${props => props.theme.colors.backgroundPaper};
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-right: 30px;
  padding: 34px 0;
`;
