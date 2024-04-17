import styled from 'styled-components';

export const Box = styled.div`
  max-width: 269px;
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    max-width: 630px;
    padding: 36px 58px;
  }
`;

export const Btn = styled.button`
  max-width: 87px;
  margin-top: 10px;
  padding: 10px 26px;
  border-radius: 6px;
  border: none;
  font-size: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  background: ${props => props.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 199px;
    margin-top: 20px;
    padding: 16px 60px;
    border-radius: 12px;
    font-size: 24px;
  }
`;
