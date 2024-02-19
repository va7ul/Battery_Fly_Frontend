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
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  margin-bottom: 8px;
`;

export const TextTel = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 13px;
`;

export const Text = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 9px;
  margin-top: 12px;
`;

export const Tel = styled.a`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
`;

export const Desc = styled.a`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  margin-bottom: 9px;
`;
