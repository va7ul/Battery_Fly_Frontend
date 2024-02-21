import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const Item = styled.li`
  color: ${props => props.theme.colors.secondary};
  opacity: 0.7;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: block;
  height: 20px;

  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    height: 32px;
  }
`;
