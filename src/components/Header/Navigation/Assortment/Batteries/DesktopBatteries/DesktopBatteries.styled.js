import styled from 'styled-components';

export const BatteryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  position: absolute;
  right: -20px;

  & svg {
    width: 29px;
    height: 19px;
    fill: ${props => props.theme.colors.secondary};
  }
`;
