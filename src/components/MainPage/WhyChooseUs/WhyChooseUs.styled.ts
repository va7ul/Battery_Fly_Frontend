import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  margin: 0 auto 20px auto;
  padding: 0 20px;

  @media (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 150px 0px;
  }
`;

export const Holder = styled.div`
  position: relative;
  @media (min-width: 1280px) {
    width: 612px;
    height: 472px;
    margin: 90px 0;
    background-color: #f7f7f7;
    border-radius: 20px;
  }
`;

export const List = styled.ul`
  min-width: 360px;
  display: grid;
  gap: 22px;
  background: ${props => props.theme.colors.gradient};
  padding: 20px 36px;

  @media (min-width: 1280px) {
    grid-template-columns: 250px 250px;
    column-gap: 28px;
    row-gap: 55px;
    width: 612px;
    background: transparent;
    padding: 78px 44px;
  }
`;

export const ListItem = styled.li`
  background-color: #e1e1e1;
  border-radius: 20px;
  width: 190px;
  padding: 16px;
  position: relative;
  box-shadow: 0px 17px 17px 0px rgba(0, 0, 0, 0.07);

  &:nth-child(2n) {
    position: relative;
    left: 100px;
  }

  &:last-child svg {
    height: 18px;
    width: 18px;
    top: -10px;
  }

  @media (min-width: 1280px) {
    width: 250px;
    padding: 10px;
    grid-column: 2;
    grid-row: 2;

    &:first-child {
      position: absolute;
      top: 146px;
      grid-column: 1;
      grid-row: 1/2;
    }

    &:nth-child(2n) {
      position: relative;
      left: 0px;
      grid-column: 2;
      grid-row: 1;
    }

    &:last-child svg {
      height: 34px;
      width: 34px;
      top: -30px;
    }
  }
`;

export const IconHope = styled.svg`
  z-index: 2;
  height: 35px;
  width: 35px;
  position: absolute;
  transform: rotate(64deg);
  top: 228px;
  left: 22px;
  fill: ${props => props.theme.colors.secondary};

  @media (min-width: 1280px) {
    width: 76px;
    height: 76px;
    top: 362px;
    left: 46px;
    fill: #fbd06e;
    z-index: 2;
  }
`;

export const IconVerticalSpiral = styled.svg`
  width: 60px;
  height: 124px;
  position: absolute;
  top: 18px;
  right: 24px;
  stroke: ${props => props.theme.colors.textPrimary};
  fill: transparent;

  @media (min-width: 1280px) {
    width: 119px;
    height: 254px;
    top: 170px;
    right: -72px;
    z-index: 2;
  }
`;

export const IconSpiral = styled.svg`
  width: 98px;
  height: 104px;
  position: absolute;
  bottom: 160px;
  left: 32px;
  stroke: ${props => props.theme.colors.textPrimary};
  fill: transparent;

  @media (min-width: 1280px) {
    width: 130px;
    height: 138px;
    bottom: -42px;
    left: 74px;
  }
`;
