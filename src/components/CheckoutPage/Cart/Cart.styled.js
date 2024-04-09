import styled from 'styled-components';

export const CartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    width: 530px;
    /* padding-left: 30px;
    padding-right: 30px; */
    border: none;
  }
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    border: none;
    font-size: 32px;
    text-align: start;
    padding: 0;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    text-align: end;
    border: none;
    font-size: 24px;
    padding: 0;
    margin-top: 20px;

    span {
      margin-right: 38px;
    }
  }
`;

export const ListWrap = styled.div`
  max-height: 187px;
  padding: 6px;
  overflow: auto;

  @media screen and (min-width: 1280px) {
    width: 100%;
    max-height: 400px;
    padding: 0;
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
