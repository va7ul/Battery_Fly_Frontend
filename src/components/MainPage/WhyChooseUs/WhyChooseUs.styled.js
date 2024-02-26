import styled from 'styled-components';

export const Box = styled.div`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: grid;
  gap: 22px;
  background: ${props => props.theme.colors.gradient};
  padding: 20px 36px;
`;

export const ListItem = styled.li`
  background-color: #e1e1e1;
  border-radius: 20px;
  width: 190px;
  padding: 16px;
  position: relative;
  box-shadow: 0px 17px 17px 0px rgba(0, 0, 0, 0.07);

  &:nth-child(2n) {
    position: relative;
    left: 100px;
  }
`;
