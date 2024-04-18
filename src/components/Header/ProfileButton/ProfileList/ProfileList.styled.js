import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  width: 100%;
  /* text-align: center; */
  font-size: 14px;
  font-weight: 600;

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.textPrimary};
    padding-bottom: 6px;
  }

  &:not(:first-child) {
    padding-top: 6px;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  cursor: pointer;
  padding-right: 100%;
  &:hover {
    color: ${props => props.theme.colors.hoverColor};
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  padding-right: 100%;
  &:hover {
    color: ${props => props.theme.colors.hoverColor};
  }
`;
