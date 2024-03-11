import styled from 'styled-components';
import { getSectionBackground } from 'styles/GlobalStyled';

const getColor = props => {
  if (props.category === 'Акції') {
    return props.theme.colors.backgroundPaper;
  }
  return 'inherit';
};

export const StyledSection = styled.section`
  padding-top: 15px;
  padding-bottom: 15px;
  background: ${getSectionBackground};

  @media screen and (min-width: 1280px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const StyledContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
    padding-right: 110px;
  }
`;

export const StyledLink = styled.a`
  font-size: 16px;
  margin-bottom: 15px;
  color: ${getColor};
  display: inline-flex;
  gap: 15px;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.05);

    svg {
      fill: ${props => props.theme.colors.secondary};
    }
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    font-size: 32px;
  }

  h2 {
    font-size: inherit;
    font-weight: 600;
  }

  svg {
    fill: ${getColor};
    width: 30px;
    height: 19px;
    transition: ${props => props.theme.transition.main};

    @media screen and (min-width: 1280px) {
      width: 50px;
      height: 38px;
    }
  }
`;
