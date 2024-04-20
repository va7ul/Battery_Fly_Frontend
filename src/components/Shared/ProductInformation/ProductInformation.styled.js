import styled from 'styled-components';

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Subject = styled.h2`
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  background: ${props => props.theme.colors.greyBackgroundPaper};
  border-radius: 12px;
  text-align: center;
  padding: 6px;

  @media screen and (min-width: 1280px) {
    height: 42px;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const Info = styled.div`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
