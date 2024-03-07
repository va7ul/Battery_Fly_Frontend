import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  font-weight: 500;
  font-size: 15px;
  padding: 18px 0;
  color: ${props => props.theme.colors.textPrimary};

  @media screen and (min-width: 1280px) {
    font-weight: 400;
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.secondary};
  }

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;