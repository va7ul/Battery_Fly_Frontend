import styled from 'styled-components';

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  margin-right: 27px;
  margin-left: 15px;
  z-index: 2;
  fill: ${props => props.theme.colors.hoverColor};
`;
