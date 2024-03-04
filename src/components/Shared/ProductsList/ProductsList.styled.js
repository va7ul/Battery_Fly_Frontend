import styled from 'styled-components';
import { gradientTransitionCard } from 'styles/GlobalStyled';

export const StyledList = styled.ul`
  display: grid;
  gap: 20px 12px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 1280px) {
    gap: 40px 20px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledListCard = styled.li`
  max-width: 250px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(rgba(213, 213, 213, 1), rgba(241, 241, 241, 0));
  padding: 15px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  transition: ${props => props.theme.transition.main};
  cursor: pointer;

  ${gradientTransitionCard}
  &::after {
    border-radius: 20px;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 1280px) {
    padding: 20px;
  }
`;