import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { gradientTransitionBtn } from '../../../../styles/GlobalStyled';

export const Item = styled.li`
  font-size: 15px;
  font-weight: 600;
  padding: 8px 15px;
  color: ${props => props.theme.colors.textPrimary};
  border-top: 1px solid ${props => props.theme.colors.greyBackgroundPaper};
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    border: none;
    padding: 34px 0;
    margin-right: 30px;

    &:nth-child(6) {
      margin-right: 6px;
    }

    &:hover {
      color: ${props => props.theme.colors.secondary};
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
