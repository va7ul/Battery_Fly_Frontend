import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-left: 71px;
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 600;
  z-index: 2;

  @media screen and (min-width: 1280px) {
    padding: 28px 0;
    color: ${props => props.theme.colors.backgroundPaper};
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
