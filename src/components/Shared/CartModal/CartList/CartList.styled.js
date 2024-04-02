import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  height: 78vh;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 20px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    margin-left: 10px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.textDisabled};
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${props => props.theme.colors.textDisabled};
  }
`;
