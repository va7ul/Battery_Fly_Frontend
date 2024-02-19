import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 30px;
  /* margin: 0 auto; */
  @media screen and (min-width: 1280px) {
    padding: 0 110px;
    background-image: linear-gradient(
      180deg,
      rgba(251, 208, 110, 0.04),
      rgba(251, 208, 110, 0.39) 43.212%,
      rgba(251, 208, 110, 0) 95.5%
    );
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const Title = styled.h2`
  color: rgb(244, 170, 0);
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const SubTitle = styled.h3`
  color: #050505;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.22;

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const Sntc = styled.p`
  color: #050505;
  font-size: 12px;
  line-height: 1.2;

  @media screen and (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const Descr = styled.p`
  font-size: 10px;
  line-height: 1.2;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  list-style: inside;
  font-size: 10px;
  line-height: 1.2;
  color: #050505;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  fill: #f2c94c;
  top: -25px;
  right: 10px;
  width: 60px;
  height: auto;

  @media screen and (min-width: 1280px) {
    top: 0;
    width: 100px;
  }
`;
