import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 60px);
  gap: 4px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-items: center;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 14px;
    padding-top: 36px;
    padding-bottom: 60px;
  }
`;

export const ListItem = styled.li`
  height: 66px;
  text-align: center;
  @media (min-width: 1280px) {
    height: 140px;
  }
`;

export const Image = styled.img`
  @media (min-width: 1280px) {
  width: 200px; 
  height: 140px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 4px;
  font-size: 7px;
`;
