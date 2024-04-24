import styled from 'styled-components';

export const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 25px;

  @media screen and (min-width: 1280px) {
    gap: 45px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  font-size: 10px;

  caption {
    font-size: 12px;
    text-align: left;
    margin-bottom: 5px;
  }

  th {
    font-weight: 600;
  }

  th,
  td {
    /* font-weight: 400; */
    border: 1px solid black;
    padding: 7px 0px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;

    caption {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
`;
