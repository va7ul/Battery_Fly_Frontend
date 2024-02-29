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

  @media screen and (min-width: 1280px) {
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

export const ArrowButton = styled.button`
  display: flex;
  width: 24px;
  margin: 0;
  background-color: transparent;
  outline: none;
  border: none;
  transform: rotate(180deg);

  & svg {
    width: 11px;
    height: 11px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
  }
`;
