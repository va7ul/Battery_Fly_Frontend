import styled from 'styled-components';

export const Box = styled.div`
  height: 70px;
  margin-bottom: 6px;

  @media (min-width: 1280px) {
    height: 158px;
    margin-bottom: 12px;
  }
`;

export const SmallTitle = styled.h3`
  font-size: 10px;
  font-weight: 600;
  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Icon = styled.svg`
  height: 20px;
  width: 20px;
  margin-bottom: 4px;
  @media (min-width: 1280px) {
    height: 36px;
    width: 36px;
    margin-bottom: 16px;
  }
`;
