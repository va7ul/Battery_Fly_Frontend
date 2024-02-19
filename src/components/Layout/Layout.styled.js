import styled from 'styled-components';
import { hidden } from '../../styles/GlobalStyled';

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;

  /* for example */
  /* background: ${props => props.theme.colors.error}; */

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const AppTitle = styled.h1`
  ${hidden}
`;
