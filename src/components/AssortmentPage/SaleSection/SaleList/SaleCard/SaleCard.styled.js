import styled from 'styled-components';

export const StyledExample = styled.div`
  padding-left: 30px;
  background: ${props => props.theme.colors.gradientBlack};

  /* for example */
  /* background: ${props => props.theme.colors.error}; */ /* &:hover {
    color: ${props => props.theme.colors.error};
    transition: ${props => props.theme.transition.main};
  } */
  @media screen and (min-width: 1280px) {
    padding-left: 110px;
  }
`;

export const StyledImage = styled.img`
  width: 220px;
  height: 220px;
  background: gray;
`;
