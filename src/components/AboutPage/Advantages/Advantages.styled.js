import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const List = styled.ul`
  width: 338px;
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
  width: 324px;
  height: 320px;
  padding: 36px 34px;
  position: relative;
  box-shadow: 0px 4px 25.6px 1px rgba(0, 0, 0, 0.15);
`;

export const IconSun = styled.svg`
  width: 144px;
  height: 152px;
  position: absolute;
  top: -66px;
  left: -100px;
  fill: ${props => props.theme.colors.secondary};
`;

export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const LinkToAssortment = styled(Link)`
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  padding: 14px 10px;
  background: ${props => props.theme.colors.gradient};

  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 12px;
  }
`;
