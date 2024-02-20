import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    padding: 0px 30px 0px 30px;
    position: relative;
  }

  @media screen and (min-width: 1280px) {
    padding: 0px 110px 0px 110px;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 40px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 10px;
  margin-bottom: 10px;
`;

export const Item = styled.li`
  font-size: 10px;
`;

export const Box = styled.div`
  font-size: 10px;
  margin-bottom: 6px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const IconTop = styled.svg`
  position: absolute;
  width: 132.59px;
  height: 75.02px;
  left: 175px;
  top: 40px;
  z-index: 1;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  fill: rgba(251, 208, 110, 0.72);
`;

export const IconBottom = styled.svg`
  position: absolute;
  width: 125px;
  height: 70.73px;
  left: 235px;
  top: 92px;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  fill: rgba(245, 255, 129, 0.62);
`;
