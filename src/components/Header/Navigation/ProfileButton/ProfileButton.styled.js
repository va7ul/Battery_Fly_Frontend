import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  min-width: 111px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.hoverColor};
  gap: 5px;
  transition: ${props => props.theme.transition.main};

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  z-index: 2;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  z-index: 2;

  & svg {
    rotate: 270deg;
    width: 10px;
    height: 10px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
  }
`;
