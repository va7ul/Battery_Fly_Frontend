import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Item = styled.li`
  font-size: 15px;
  font-weight: 600;
  border-top: 1px solid ${props => props.theme.colors.greyBackgroundPaper};

  @media screen and (min-width: 1280px) {
    border: none;
    padding: 0;
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  color: ${props => props.theme.colors.textPrimary};

  &.active {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 1280px) {
    padding: 34px 0;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  @media screen and (max-width: 1280px) {
    position: relative;
    z-index: 0;
    ${gradientTransitionBtn}
    &::after {
      background: ${props => props.theme.colors.gradient};
    }
  }
`;
