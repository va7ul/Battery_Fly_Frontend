import styled from 'styled-components';
import { hidden } from '../styles/GlobalStyled';

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 110px;
    padding-right: 110px;
  }
`;

export const AppTitle = styled.h1`
  ${hidden}
`;
