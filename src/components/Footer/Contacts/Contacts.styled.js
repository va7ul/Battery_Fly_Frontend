import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 1280px) {
    gap: 10px;
  }
`;

export const Title = styled.h4`
  font-size: 10px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`;

export const Text = styled.p`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`;
