import styled from 'styled-components';

export const BurgerButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  outline: none;
  border: none;
  margin-right: 8px;
`;
export const MenuWrap = styled.div`
  display: flex;
  padding: 0px 15px 10px;
  align-items: center;
`;

export const ArrowButton = styled.button`
  display: flex;
  justify-content: start;
  width: 24px;
  margin: 0;
  margin-right: 80px;
  background-color: transparent;
  outline: none;
  border: none;

  & svg {
    width: 18px;
    height: 18px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SubWrap = styled.div`
  display: flex;
  align-items: center;
`;
