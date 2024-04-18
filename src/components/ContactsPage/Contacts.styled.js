import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  position: relative;
  display: grid;
  gap: 15px;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    gap: 30px;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.hoverColor};
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    gap: 10px;
  }
`;

export const Item = styled.li`
  font-size: 10px;

  &:hover {
    color: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (min-width: 1280px) {
    gap: 10px;
  }
`;

export const Div = styled.div`
  font-size: 10px;

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.hoverColor};
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const BoxAddress = styled.div`
  font-size: 10px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.hoverColor};
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const ImgTop = styled.img`
  position: absolute;
  width: 132.59px;
  right: 47px;
  top: 70px;
  z-index: 1;

  @media screen and (min-width: 1280px) {
    width: 370.07px;
    height: 209.38px;
    right: 210px;
    top: 140px;
  }
`;

export const ImgBot = styled.img`
  position: absolute;
  width: 125px;
  height: 70.73px;
  right: 0px;
  bottom: 42px;

  @media screen and (min-width: 1280px) {
    width: 370.07px;
    height: 209.38px;
    bottom: 20px;
  }
`;
