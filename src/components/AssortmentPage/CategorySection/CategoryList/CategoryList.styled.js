import styled from 'styled-components';
import { gradientTransitionCard, hidden } from 'styles/GlobalStyled';

const getCardSize = props => {
  if (props.category === 'Акції') {
    return '290px';
  }
  return '250px';
};

const hideCard = props => {
  if (props.category === 'Акції') {
    return `& li:nth-child(4) {${hidden}};`;
  }
};

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px 12px;

  @media screen and (min-width: 1280px) {
    gap: 20px;
    flex-wrap: nowrap;
    ${hideCard}
  }
`;

export const StyledListCard = styled.li`
  max-width: 154px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(rgba(213, 213, 213, 1), rgba(241, 241, 241, 0));
  padding: 5px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  transition: ${props => props.theme.transition.main};

  ${gradientTransitionCard}
  &::after {
    border-radius: 20px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    padding: 10px;
    max-width: ${getCardSize};
  }
`;
