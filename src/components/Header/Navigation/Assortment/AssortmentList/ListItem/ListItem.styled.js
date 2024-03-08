import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { gradientTransitionBtn } from '../../../../../../styles/GlobalStyled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  padding: 8px 15px;
  border-top: 1px solid ${props => props.theme.colors.greyBackgroundPaper};

  color: ${props => props.theme.colors.textPrimary};

  @media screen and (min-width: 1280px) {
    font-weight: 400;
    padding: 18px 10px;

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

    position: relative;
    z-index: 0;
    ${gradientTransitionBtn}
    &::after {
      background: ${props => props.theme.colors.gradient};
    }
  }
`;

export const StyledLink = styled(NavLink)`
  width: 100%;

  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;
