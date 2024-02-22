import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h4`
  font-size: 10px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 10px;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 1280px) {
    /* font-size: var(--main-font-size); */
  }
`;
