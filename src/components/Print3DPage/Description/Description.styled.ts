import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 10px;
`;

export const Desc = styled.ul`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Item = styled.li`
  list-style: outside;
  margin-left: 16px;
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 600;
  }
`;
