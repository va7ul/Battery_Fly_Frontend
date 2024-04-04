import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-image: ${props => props.theme.colors.gradientBackground};

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 1280px) {
    gap: 30px;
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
    gap: 20px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const Sntc = styled.p`
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 5px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const NPTitle = styled.p`
  display: flex;
  gap: 5px;
  align-items: center;
  height: 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 5px;

  @media screen and (min-width: 1280px) {
    gap: 7px;
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Descr = styled.p`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }

  & li {
    list-style: inside;
    margin-left: 5px;
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

export const IconSquares = styled.svg`
  display: block;
  position: absolute;
  width: 27px;
  height: 27px;
  right: 50px;
  bottom: 56px;

  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
  fill: ${props => props.theme.colors.textPrimary};

  @media screen and (min-width: 1280px) {
    width: 111px;
    height: 111px;
    right: 20px;
    bottom: 50px;
  }
`;

export const NPIcon = styled.svg`
  width: 15px;
  fill: ${props => props.theme.colors.textPrimary};

  @media screen and (min-width: 1280px) {
    width: 30px;
  }
`;
