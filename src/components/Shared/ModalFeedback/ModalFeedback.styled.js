import styled, { createGlobalStyle } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  padding: 36px 24px 4px 24px;
  margin-bottom: 6px;

  @media (min-width: 1280px) {
    font-size: 20px;
    padding: 40px 108px 4px 108px;
    margin-bottom: 8px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 48px 26px 48px;

  @media (min-width: 1280px) {
    padding: 0px 76px 26px 76px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 10px;
  font-weight: 600;

  @media (min-width: 1280px) {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const StyledField = styled(Field)`
  max-width: 261px;
  height: 28px;
  padding: 4px 8px;
  color: rgb(225, 225, 225);
  border: 1px solid rgb(99, 99, 99);
  border-radius: 6px;
  background: transparent;

  &:focus {
    color: rgb(225, 225, 225);
    outline: none;
    border: 1px solid rgba(255, 208, 100, 0.7);
  }

  @media (min-width: 1280px) {
    max-width: 476px;
    height: 51px;
    border-radius: 8px;
  }
`;

export const PhoneFieldGlobalStyles = createGlobalStyle`
  .react-international-phone-input {
    width: 224px;
  &:focus {
    color: rgb(225, 225, 225);
    outline: none;
    border: 1px solid rgba(255, 208, 100, 0.7);
  }
    @media (min-width: 1280px) {
    width: 430px;
  }
  }
   .react-international-phone-input-container .react-international-phone-country-selector-button{
    width:37px;

    @media (min-width: 1280px) {
    width: 46px;
  }
} 
`;

export const StyledTextField = styled(Field)`
  max-width: 261px;
  height: 46px;
  padding: 4px 8px;
  color: rgb(225, 225, 225);
  border: 1px solid rgb(99, 99, 99);
  border-radius: 6px;
  background: transparent;
  overflow-x: auto;

  &::placeholder {
    font-size: 10px;
    color: rgba(225, 225, 225, 0.5);
  }
  &:focus {
    color: rgb(225, 225, 225);
    outline: none;
    border: 1px solid rgba(255, 208, 100, 0.7);
  }

  @media (min-width: 1280px) {
    color: rgb(225, 225, 225);
    max-width: 476px;
    height: 117px;
    border-radius: 8px;

    &::placeholder {
      font-size: 14px;
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #da7b6a;
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`;

export const DivErrorMessage = styled.div`
  color: #da7b6a;
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`;

export const Btn = styled.button`
  max-width: 128px;
  margin-top: 6px;
  margin-left: 67px;
  padding: 12px 30px;
  border-radius: 6px;
  border: none;
  font-size: 12px;
  font-weight: 500;

  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media (min-width: 1280px) {
    max-width: 199px;
    margin-top: 60px;
    margin-left: 140px;
    padding: 16px 38px;
    border-radius: 12px;
    font-size: 24px;

    &::after {
      border-radius: 12px;
    }
  }
`;
