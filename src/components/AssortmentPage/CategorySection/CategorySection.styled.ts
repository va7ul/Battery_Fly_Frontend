import styled from 'styled-components';
import { Props } from '../../../@types/globalStyles.types';
import { getSectionBackground } from 'styles/globalStyles';

const getColor = (props: Props): string => {
  if (props.category === 'Акції') {
    return props.theme.colors.hoverColor;
  }
  return 'inherit';
};

const getPaddingMob = (props: Props): string => {
  if (props.category === 'Акції') {
    return '20px';
  }
  return 'inherit';
};

const getPaddingDesc = (props: Props): string => {
  if (props.category === 'Акції') {
    return '50px';
  }
  return 'inherit';
};

export const StyledSection = styled.section<{ category: string }>`
  padding-bottom: 20px;
  padding-top: ${getPaddingMob};
  background: ${getSectionBackground};

  @media screen and (min-width: 1280px) {
    padding-bottom: 50px;
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

export const StyledLink = styled.a<{ category: string }>`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${getColor};
  display: inline-flex;
  gap: 15px;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};
    transform: scale(1.05);

    svg {
      fill: ${props => props.theme.colors.hoverColor};
    }
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    font-size: 40px;
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
      width: 60px;
      height: 48px;
    }
  }
`;
