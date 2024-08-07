import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.hoverColor};
  margin-bottom: 16px;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  padding: 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    max-width: 1280px;
  }
`;

export const OrderButton = styled.button`
  margin: 15px auto 0px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  width: 149px;

  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);
  background: ${props => props.theme.colors.secondary};

  &:hover {
    background: ${props => props.theme.colors.hoverColor};
  }
  @media screen and (min-width: 1280px) {
    width: 266px;
    height: 61px;
    padding: 15px 8px;
    margin-top: 20px;
    font-size: 20px;
    margin: 15px 0px 0px;
    border-radius: 12px;
  }
`;
