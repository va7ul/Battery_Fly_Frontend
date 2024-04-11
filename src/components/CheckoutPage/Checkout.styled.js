import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 16px;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    max-width: 1280px;
  }
`;
