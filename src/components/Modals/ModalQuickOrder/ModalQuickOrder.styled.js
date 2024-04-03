import styled, { createGlobalStyle } from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Wrapper = styled.div`
  max-width: 269px;
  padding: 15px 30px;

  @media (min-width: 1280px) {
    max-width: 552px;
    padding: 30px 60px;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 2px;

  @media (min-width: 1280px) {
    font-size: 36px;
    margin-bottom: 16px;
  }
`;

export const CodeOfGoodText = styled.p`
  font-size: 10px;
  color: ${props => props.theme.colors.textDisabled};
  margin-bottom: 6px;

  @media (min-width: 1280px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const PriceText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;

  @media (min-width: 1280px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const PhoneFieldGlobalStyles = createGlobalStyle`
  .react-international-phone-input {
    width: 172px;

    @media (min-width: 1280px) {
    width: 386px;
  }
  }
   .react-international-phone-input-container .react-international-phone-country-selector-button{
    width:37px;
    background-color: rgba(31, 31, 31, 0.3);

    @media (min-width: 1280px) {
    width: 46px;
  }
} 
`;

export const DivErrorMessage = styled.div`
  color: #da7b6a;
  font-size: 8px;
  margin-top: 4px;

  @media (min-width: 1280px) {
    font-size: 12px;
    margin-top: 8px;
  }
`;

export const Btn = styled.button`
 align-self: center;
  max-width: 190px;
  margin-top: 16px;
  margin-bottom: 14px;
  padding: 12px 10px;
  border-radius: 6px;
  border: none;
  font-size: 15px;

  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media (min-width: 1280px) {
    max-width: 310px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 16px 20px;
    border-radius: 12px;
    font-size: 24px;

    &::after {
      border-radius: 12px;
    }
  }
`;
