import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
    padding-right: 110px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    font-size: 32px;
    margin-top: 30px;
  }
`;
