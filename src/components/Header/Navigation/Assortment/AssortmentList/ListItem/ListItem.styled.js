import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { gradientTransitionBtn } from '../../../../../../styles/GlobalStyled';

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;

  color: ${props => props.theme.colors.textPrimary};

  @media screen and (min-width: 1280px) {
    font-weight: 400;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }

    &:not(:first-child) {
      border-top: 1px solid ${props => props.theme.colors.greyBackgroundPaper};
    }
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
    display: flex;
    align-items: center;
    border-top: 1px solid ${props => props.theme.colors.greyBackgroundPaper};
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  &.active {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 1280px) {
    padding: 18px 0;
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
