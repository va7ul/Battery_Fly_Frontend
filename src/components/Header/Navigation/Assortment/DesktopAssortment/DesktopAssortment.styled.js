import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;

  & svg {
    transform: rotate(270deg);
    width: 11px;
    height: 11px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
  }
`;
