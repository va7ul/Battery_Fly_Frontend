import styled from 'styled-components';

export const CartWrap = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    width: 530px;
    border: none;
    margin-bottom: 0;
  }
`;

export const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    border: none;
    font-size: 32px;
    text-align: start;
    padding: 0;
    margin-top: 24px;
  }
`;

export const Text = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    text-align: end;
    border: none;
    font-size: 24px;
    margin-top: 10px;
  }
`;

export const ListWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  max-height: 226px;
  overflow: auto;

  @media screen and (min-width: 1280px) {
    width: 100%;
    max-height: 440px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.textDisabled};
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${props => props.theme.colors.textDisabled};
  }
`;
