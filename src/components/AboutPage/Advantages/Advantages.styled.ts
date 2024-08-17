import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  width: 530px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding-left: 94px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 8px;
  flex-direction: column;
  position: relative;
`;

export const Box = styled.div`
  background-color: #e1e1e1;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 0px;
  width: 420px;
  height: 454px;
  padding: 50px 40px;
  position: relative;
  box-shadow: 0px 4px 25.6px 1px rgba(0, 0, 0, 0.15);
`;

export const IconSun = styled.svg`
  width: 157px;
  height: 166px;
  position: absolute;
  top: -66px;
  right: -76px;
  fill: ${props => props.theme.colors.hoverColor};
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 16px;
`;

export const LinkToAssortment = styled(Link)`
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  padding: 14px 10px;
  background: ${props => props.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
  }
`;
