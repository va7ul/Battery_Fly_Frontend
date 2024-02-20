import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
`;

export const Item = styled.li`
  opacity: 0.6;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: block;
  height: 20px;

  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.secondary};
    /* transition: ${props => props.theme.transition.main}; */
    transform: scale(1.05);
  }
`;
