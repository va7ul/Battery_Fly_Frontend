import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  font-size: 15px;
  padding: 8px 0;
  color: ${props => props.theme.colors.textPrimary};
  border-top: 1px solid ${props => props.theme.colors.greyBackgroundPaper};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 1280px) {
    font-weight: 600;
    border: none;
    padding: 0;
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 27px;
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (min-width: 1280px) {
    gap: 30px;
    flex-direction: row;
  }
`;

export const HopeIcon = styled.svg`
  width: 14px;
`;
