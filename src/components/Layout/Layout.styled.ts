import styled from 'styled-components';
import { hidden } from '../../styles/globalStyles';

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const AppTitle = styled.h1`
  ${hidden}
`;
