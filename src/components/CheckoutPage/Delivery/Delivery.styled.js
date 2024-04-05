import styled from 'styled-components';

export const Title = styled.p`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;

export const Button = styled.div`
  width: 155px;
  height: 40px;
  background: ${props => props.theme.colors.greyBackgroundPaper};
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  padding: 6px;

  &:hover {
    background: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    width: 233px;
    height: 61px;
    padding: 18px;
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
  /* margin-bottom: 5px; */
  color: red;

  @media screen and (min-width: 1280px) {
    gap: 7px;
    font-size: 24px;
    /* margin-bottom: 10px; */
  }
`;

export const NPIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: red;

  @media screen and (min-width: 1280px) {
    width: 30px;
  }
`;
