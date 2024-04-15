import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getRotation } from 'styles/GlobalStyled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  min-width: 111px;
  border-radius: 10px;
  gap: 5px;
  background-color: ${props => props.theme.colors.secondary};
  transition: ${props => props.theme.transition.main};

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }
`;

export const StyledLink = styled(Link)`
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

  & svg {
    transform: ${getRotation};
    width: 11px;
    height: 11px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
    transition: ${props => props.theme.transition.main};
  }

  &:hover svg {
    transform: rotate(270deg) scale(1.4);
  }
`;
