import styled from 'styled-components';

export const Box = styled.div`
  @media (min-width: 1280px) {
    padding-top: 34px;
    padding-right: 364px;
    padding-bottom: 54px;
    padding-left: 90px;
    border-radius: 24px;
    background: ${props => props.theme.colors.gradient};
    position: relative;
  }
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 10px;

  @media (min-width: 1280px) {
    font-size: 40px;
    font-weight: 600;
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: 20px;
  }
`;

export const IconEllipse = styled.svg`
  @media (min-width: 1280px) {
    width: 123px;
    height: 123px;
    position: absolute;
    bottom: -28px;
    right: 144px;
    fill: ${props => props.theme.colors.secondary};
    z-index: 1;
  }
`;
export const IconHeavyWaves = styled.svg`
  @media (min-width: 1280px) {
    width: 40px;
    height: 185px;
    position: absolute;
    top: 38px;
    right: 208px;
    stroke: #261c1c;
    fill: transparent;
    z-index: 2;
  }
`;

export const IconSpiral = styled.svg`
  @media (min-width: 1280px) {
    width: 175px;
    height: 219px;
    position: absolute;
    top: 18px;
    right: 30px;
    stroke: #261c1c;
    fill: transparent;
  }
`;
