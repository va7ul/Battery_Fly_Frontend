import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  font-size: 15px;
  font-weight: 600;
  padding: 8px 15px;
  color: ${props => props.theme.colors.textPrimary};
  border-top: 1px solid ${props => props.theme.colors.greyBackgroundPaper};
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    font-weight: 600;
    border: none;
    padding: 34px 0;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 27px;

    &:hover {
      background: ${props => props.theme.colors.gradient};
    }
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const HopeIcon = styled.svg`
  width: 14px;
  height: 14px;
`;
