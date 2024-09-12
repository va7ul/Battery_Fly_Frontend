import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  font-size: 10px;
  background: ${props => props.theme.colors.gradientBackground};
  display: grid;
  gap: 15px;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    font-size: 18px;
    gap: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.hoverColor};

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.h4`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;
