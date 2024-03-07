import styled from 'styled-components';
import { Link } from 'react-router-dom';


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
    transition: ${props => props.theme.transition.main};

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Subtitle = styled.p`
  margin-top: 4px;
  font-size: 7px;

  @media (min-width: 1280px) {
    margin-top: 10px;
    font-size: 20px;
    position: absolute;
    top: calc(100%);
    visibility: hidden;
    width: 200px;
    transition: visibility 230ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const LinkToProducts = styled(Link)`
  @media (min-width: 1280px) {
    display: block;
    position: relative;
    & ${Image}:hover + ${Subtitle} {
      visibility: visible;
      width: 200px;
    }
  }
`;
