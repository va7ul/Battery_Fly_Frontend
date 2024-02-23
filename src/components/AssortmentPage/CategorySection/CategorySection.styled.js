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

export const StyledSection = styled.section`
  padding-top: 80px;
`;

export const StyledContainer = styled.div`
  padding-left: 30px;

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 45px;
`;
