import styled from 'styled-components';
import { getSectionBackground } from 'styles/GlobalStyled';

export const StyledContainer = styled.div`
  padding: 15px 20px;
  background: ${getSectionBackground};

  @media screen and (min-width: 1280px) {
    padding: 40px 110px 30px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    font-size: 32px;
  }
`;
