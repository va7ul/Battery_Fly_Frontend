import styled from 'styled-components';


export const Box = styled.div`
  display: flex;
  gap: 6px;
`;

export const SmallTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: rgba(31, 31, 31, 0.9);
`;

export const Icon = styled.svg`
  height: 14px;
  width: 14px;
  fill: ${props => props.theme.colors.secondary};
`;
