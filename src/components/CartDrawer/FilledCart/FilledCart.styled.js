import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListWrap = styled.div`
  margin-top: 20px;
  max-height: 78vh;
  overflow: auto;
  padding-right: 2px;

  @media screen and (min-width: 1280px) {
    padding-right: 4px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
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

export const Wrap = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-left: auto;
  margin-top: 15px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Total = styled.span`
  margin-left: 10px;
  font-size: 16px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);
  padding: 13px 12px;
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 35px;
    font-size: 16px;
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);
  padding: 13px 8px;
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 35px;
    font-size: 16px;
  }
`;
