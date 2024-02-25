import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 30px;
  background-image: linear-gradient(
    180deg,
    rgba(251, 208, 110, 0.04),
    rgba(251, 208, 110, 0.39) 43.212%,
    rgba(251, 208, 110, 0) 95.5%
  );

  @media screen and (min-width: 1280px) {
    padding: 0 110px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const Sntc = styled.p`
  font-size: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const NPTitle = styled.p`
  display: flex;
  gap: 7px;
  align-items: center;
  height: 20px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    height: 40px;
    font-size: 30px;
  }
`;

export const Descr = styled.p`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  list-style: inside;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Link = styled.a`
  font-weight: 500;
  text-decoration: underline;
  margin-left: 3px;
  text-transform: uppercase;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const IconShipping = styled.svg`
  position: absolute;
  fill: ${props => props.theme.colors.svgColor};
  top: -25px;
  right: 10px;
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const IconSquares = styled.svg`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    left: 30%;
    bottom: 60px;
    -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
    fill: ${props => props.theme.colors.textPrimary};
  }
`;

export const NPIcon = styled.svg`
  width: 20px;
  fill: ${props => props.theme.colors.textPrimary};

  @media screen and (min-width: 1280px) {
    width: 40px;
  }
`;
