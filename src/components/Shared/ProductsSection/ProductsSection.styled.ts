import styled from 'styled-components';
import { getSectionBackground } from 'styles/globalStyles';

export const StyledContainer = styled.div<{ category: string }>`
  padding: 20px;
  background: ${getSectionBackground};

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    font-size: 40px;
  }
`;
