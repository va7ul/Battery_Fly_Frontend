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
