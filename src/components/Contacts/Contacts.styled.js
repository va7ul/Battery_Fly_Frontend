import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    padding-left: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
  }
`;

export const Title = styled.h2`
  color: rgb(244, 170, 0);
  font-size: 16px;
  margin-bottom: 8px;
`;

export const TextTel = styled.p`
  font-size: 12px;
  margin-bottom: 13px;
`;

export const Text = styled.p`
  font-size: 12px;
  margin-bottom: 9px;
  margin-top: 12px;
`;

export const Tel = styled.a`
  font-size: 10px;
`;

export const Desc = styled.a`
  font-size: 10px;
  margin-bottom: 9px;
`;
export const IconTop = styled.svg`
  position: absolute;
  width: 132.59px;
  height: 75.02px;
  left: 206.15px;
  top: 125px;
  z-index: 1;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  fill: rgba(251, 208, 110, 0.72);
`;

export const IconBottom = styled.svg`
  position: absolute;
  width: 125px;
  height: 70.73px;
  left: 266.08px;
  top: 176px;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  fill: rgba(245, 255, 129, 0.62);
`;
