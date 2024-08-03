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
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export const ContentWrapper = styled.ul`
  font-size: 10px;
  font-weight: 400;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`;

export const StyledOrdersHistoryEl = styled.li`
  font-size: 10px;
  font-weight: 400;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  display: grid;
  grid-template-columns: repeat(4, 1fr) 15px;
  row-gap: 10px;

  :first-child {
    font-weight: 600;
  }

  p:not(:first-child) {
    text-align: center;
  }

  p + svg {
    width: 15px;
    height: 15px;
    transition: ${props => props.theme.transition.main};

    &:hover,
    :focus {
      cursor: pointer;
      transform: scale(1.1);
      fill: ${props => props.theme.colors.hoverColor};
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 15px;
    padding: 20px 0px;
    grid-template-columns: repeat(4, 1fr) 20px;
    row-gap: 20px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
