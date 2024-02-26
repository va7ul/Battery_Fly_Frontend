import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
`;


export const Holder = styled.div`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap:10px;
`;

export const ListItem = styled.li`
  background: ${props => props.theme.colors.gradient};
  border-radius: 12px;
  width: 150px;
  height: 226px;
  padding: 10px;
  box-shadow: 0px 17px 17px 0px rgba(0, 0, 0, 0.07);
`;
