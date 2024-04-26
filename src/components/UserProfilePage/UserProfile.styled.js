import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  row-gap: 20px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    grid-template-columns: 1fr 790px;
    font-size: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;
