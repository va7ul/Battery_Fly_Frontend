import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 60px);
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-items: center;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, 164px);
    gap: 14px;
    padding-top: 36px;
    padding-bottom: 60px;
  }
`;

export const ListItem = styled.li`
  width: 50px;
  height: 60px;
  text-align: center;
  @media (min-width: 1280px) {
    width: 164px;
    height: 140px;
  }
`;

export const Image = styled.img`
  @media (min-width: 1280px) {
    width: 164px;
    height: 116px;
    transition: ${props => props.theme.transition.main};

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Subtitle = styled.p`
  margin-top: 4px;
  font-size: 6px;

  @media (min-width: 1280px) {
    margin-top: 10px;
    font-size: 18px;
    position: absolute;
    top: calc(100%);
    visibility: hidden;
    width: 164px;
    transform: scale(0);
    transition: visibility 220ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const LinkToProducts = styled(Link)`
  @media (min-width: 1280px) {
    display: block;
    position: relative;
    & picture:hover + ${Subtitle} {
      visibility: visible;
      width: 164px;
      transform: scale(1);
    }
  }
`;
