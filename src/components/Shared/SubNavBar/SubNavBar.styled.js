import styled from 'styled-components';

export const StyledNav = styled.nav`
  padding-top: 15px;
`;

export const StyledList = styled.ul`
  display: inline-flex;
  place-items: center;
  place-content: center;
  text-transform: uppercase;
  font-size: 13px;
  gap: 20px;
  /* padding: 12px 28px; */
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    180deg,
    rgb(231, 231, 231),
    rgba(255, 255, 255, 0) 100%
  );

  /* &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.3);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    width: 25px;
    height: 25px;
  } */
`;

export const StyledItem = styled.li`
  position: relative;
  display: inline-block;
  /* height: 50px; */
  padding-top: 30px;
  padding-bottom: 30px;

  &:after {
    content: '';
    position: absolute;
    background: rgb(225, 225, 225);
    width: 1px;
    height: 50px;
    right: -8px;
    top: 12px;
  }

  a {
    display: inline-block;
    /* height: 100%; */
  }

  /* &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.3);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    width: 25px;
    height: 25px;
  } */
`;
