import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  padding-top: 2px;
  padding-bottom: 2px;

  &:hover {
    color: ${props => props.theme.colors.hoverColor};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.textPrimary};
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  &:hover {
    color: ${props => props.theme.colors.hoverColor};
  }
`;
