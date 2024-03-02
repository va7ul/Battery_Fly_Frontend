import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (min-width: 1280px) {
    gap: 30px;
    flex-direction: row;
  }
`;

export const CartButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 600;
  z-index: 2;
  @media screen and (min-width: 1280px) {
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;
