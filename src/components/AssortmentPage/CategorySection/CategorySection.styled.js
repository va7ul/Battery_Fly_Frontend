import styled from 'styled-components';

const getSectionBackground = props => {
  if (props.category === 'Акції') {
    return 'linear-gradient(rgba(200, 200, 200, 0.04),rgba(255, 222, 147, 0.65),rgba(99, 99, 99, 0))';
  }
  return 'inherit';
};

const getPaddingMob = props => {
  if (props.category === 'Акції') {
    return '15px';
  }
  return '30px';
};

const getPaddingDesc = props => {
  if (props.category === 'Акції') {
    return '30px';
  }
  return '60px';
};

const getColor = props => {
  if (props.category === 'Акції') {
    return props.theme.colors.backgroundPaper;
  }
  return 'inherit';
};

export const StyledSection = styled.section`
  padding-top: ${getPaddingMob};
  background: ${getSectionBackground};

  @media screen and (min-width: 1280px) {
    padding-top: ${getPaddingDesc};
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
  font-weight: 600;
  margin-bottom: 15px;
  color: ${getColor};
  display: inline-flex;
  gap: 15px;

  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.1);

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
