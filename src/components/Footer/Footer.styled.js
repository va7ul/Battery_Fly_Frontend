import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(213, 213, 213, 0.54);
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 56px 110px;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
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
