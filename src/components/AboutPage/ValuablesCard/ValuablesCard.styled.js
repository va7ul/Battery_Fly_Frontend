import styled from 'styled-components';


export const Box = styled.div`
  display: flex;
  gap: 6px;
`;

export const SmallTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Icon = styled.svg`
  height: 14px;
  width: 14px;
  fill: ${props => props.theme.colors.hoverColor};

  @media (min-width: 1280px) {
    height: 24px;
    width: 24px;
    fill: ${props => props.theme.colors.textPrimary};
  }
`;
