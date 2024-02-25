import styled from 'styled-components';

export const Box = styled.div`
margin-bottom: 20px;
`;


export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  gap:10px;
`;

export const ListItem = styled.li`
  background:${props => props.theme.colors.gradient};
  border-radius: 12px;
  width: 160px;
  height: 226px;
  padding: 10px;
`;
