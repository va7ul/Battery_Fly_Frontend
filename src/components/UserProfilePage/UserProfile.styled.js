import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  row-gap: 20px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    grid-template-columns: 1fr 790px;
    font-size: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;


export const Button = styled.button`
  position: relative;
  width: 115px;
  height: 26px;
  margin-top: 18px;
  padding: 4px;
  background-color: transparent;
  border: none;
  font-size: 10px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    width: 168px;
    height: 36px;
    margin-top: 16px;
    font-size: 16px;
  }

  &::after {
    position: absolute;
    left: 22%;
    bottom: 3px;
    content: '';
    width: 78%;
    height: 1px;
    border-radius: 1px;
    background-color: currentColor;

    @media screen and (min-width: 1280px) {
      left: 18%;
      width: 82%;
      height: 2px;
    }
  }

  svg {
    position: relative;
    top: 4px;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    @media screen and (min-width: 1280px) {
      top: 8px;
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};
  }
`;