import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: grid;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 600;
  }
`;
