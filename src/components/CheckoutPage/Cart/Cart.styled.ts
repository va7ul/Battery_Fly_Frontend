import styled from 'styled-components';

export const CartWrap = styled.div`
  width: 318px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    width: 526px;
    border: none;
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

export const ListWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  max-height: 226px;
  overflow: auto;
  padding-right: 2px;

  @media screen and (min-width: 1280px) {
    width: 100%;
    max-height: 440px;
    padding-right: 4px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
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
