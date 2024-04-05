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
