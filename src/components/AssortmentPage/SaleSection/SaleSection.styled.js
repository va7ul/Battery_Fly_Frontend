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
  padding-top: 40px;
  background: linear-gradient(
    rgba(200, 200, 200, 0.04),
    rgba(255, 222, 147, 0.65),
    rgba(99, 99, 99, 0)
  );
`;

export const StyledContainer = styled.div`
  padding-left: 30px;

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 60px;
  color: ${props => props.theme.colors.secondary};
`;
