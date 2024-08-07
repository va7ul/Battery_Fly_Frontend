import styled from 'styled-components';
import { Props } from '../../../../@types/globalStyles.types';
import { gradientTransitionCard, hidden } from 'styles/globalStyles';

const getCardSize = (props: Props): string => {
  if (props.category === 'Акції') {
    return '290px';
  }
  return '250px';
};

const hideCard = (props: Props): string | undefined => {
  if (props.category === 'Акції') {
    return `& li:nth-child(4) {${hidden}};`;
  }
};

export const StyledList = styled.ul<{ category: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 12px;
  justify-content: ${props =>
    props.category === 'Акції' ? 'space-between' : 'inherit'};

  @media screen and (min-width: 1280px) {
    gap: 20px;
    flex-wrap: nowrap;
    ${hideCard}
  }
`;

export const StyledListCard = styled.li<{ category: string }>`
  max-width: 154px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(rgba(213, 213, 213, 1), rgba(241, 241, 241, 0));
  padding: 5px 5px 10px;
  border-radius: 12px;
  position: relative;
  z-index: 0;
  transition: ${props => props.theme.transition.main};

  ${gradientTransitionCard}
  &::after {
    border-radius: 12px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 10px 20px;
    max-width: ${getCardSize};
    border-radius: 20px;

    &::after {
      border-radius: 20px;
    }
  }
`;
