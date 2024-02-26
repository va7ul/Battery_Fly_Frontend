import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 56px 110px;
    max-width: 1280px;
    display: flex;
    gap: 250px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 36px;

  @media screen and (min-width: 1280px) {
  }
`;

export const Logo = styled.img`
  width: 78px;
  height: 24px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    width: 124px;
    height: 38px;
    margin-bottom: 15px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 1280px) {
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1280px) {
  }
`;
