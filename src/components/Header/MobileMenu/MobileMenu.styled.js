import styled from 'styled-components';

export const BurgerButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  outline: none;
  border: none;
  margin-right: 8px;
`;

export const ArrowButton = styled.button`
  width: 24px;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 24px;
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px 0;
`;

export const FeedbackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  background-image: ${props => props.theme.colors.gradient};
  border-radius: 6px;
  border: none;
  transition: background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 10px;
  &:hover {
    background-image: ${props => props.theme.colors.gradientHover};
  }
`;
