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
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 40px;
    /* line-height: 48px; */
  }
`;

export const Text = styled.p`
  font-size: 12px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 25px;
    margin-bottom: 32px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    gap: 20px;
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
  font-size: 10px;
  margin-bottom: 6px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 20px;
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
  right: 45px;
  top: 48px;
  z-index: 1;
  fill: rgba(251, 208, 110, 0.72);

  @media screen and (min-width: 1280px) {
    width: 370.07px;
    height: 209.38px;
    right: 200px;
    top: 210px;
  }
`;

export const ImgBot = styled.img`
  position: absolute;
  width: 125px;
  height: 70.73px;
  right: -3px;
  bottom: 38px;
  fill: rgba(245, 255, 129, 0.62);

  @media screen and (min-width: 1280px) {
    width: 370.07px;
    height: 209.38px;
    right: -9px;
    bottom: -20px;
  }
`;
