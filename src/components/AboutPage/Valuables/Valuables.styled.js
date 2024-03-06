import styled from 'styled-components'

export const Box = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const IconSpiral = styled.svg`
  width: 68px;
  height: 72px;
  position: absolute;
  top: 164px;
  right: -36px;
  stroke: ${props => props.theme.colors.textPrimary};
  fill: transparent;
  z-index: 1;
`;

export const IconRectangle = styled.svg`
  width: 43px;
  height: 43px;
  position: absolute;
  top: 200px;
  right: -4px;
  fill: ${props => props.theme.colors.secondary};
`;