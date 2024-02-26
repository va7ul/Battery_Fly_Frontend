import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 1280px) {
    gap: 10px;
  }
`;

export const Text = styled.p`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`;
