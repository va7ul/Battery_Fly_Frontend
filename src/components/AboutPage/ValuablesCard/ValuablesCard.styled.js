import styled from 'styled-components';

export const Box = styled.div``;

export const SmallTitle = styled.h3`
  font-size: 10px;
  font-weight: 500px;
`;

export const Icon = styled.svg`
  height: 14px;
  width: 14px;
  fill: ${props => props.theme.colors.svgColor};
`;
