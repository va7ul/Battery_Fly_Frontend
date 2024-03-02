import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1280px) {
    gap: 30px;
    flex-direction: row;
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 34px 0;
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 600;
  z-index: 2;

  @media screen and (min-width: 1280px) {
    color: ${props => props.theme.colors.backgroundPaper};

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;
