import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 20px;
  position: relative;

  @media screen and (min-width: 1280px) {
    padding: 30px 110px;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 40px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  margin-bottom: 6px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    gap: 10px;
    margin-bottom: 36px;
  }
`;

export const Item = styled.li`
  font-size: 10px;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
    gap: 10px;
  }
`;

export const Div = styled.div`
  font-size: 10px;

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const BoxAddress = styled.div`
  font-size: 10px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const ImgTop = styled.img`
  position: absolute;
  width: 132.59px;
  right: 60px;
  top: 28px;
  z-index: 1;

  @media screen and (min-width: 1280px) {
    width: 370.07px;
    height: 209.38px;
    right: 220px;
    top: 140px;
  }
`;

export const ImgBot = styled.img`
  position: absolute;
  width: 125px;
  height: 70.73px;
  right: -1px;
  bottom: 30px;

  @media screen and (min-width: 1280px) {
    width: 370.07px;
    height: 209.38px;
    right: -3px;
    /* bottom: -40px; */
  }
`;
