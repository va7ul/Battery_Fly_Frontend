import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 1280px) {
  }
`;

export const Item = styled.li`
  color: ${props => props.theme.colors.secondary};
  opacity: 0.8;
  transition: ${props => props.theme.transition.main};
  cursor: pointer;
  display: block;
  height: 20px;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    height: 24px;
  }
`;
