import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
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
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`;