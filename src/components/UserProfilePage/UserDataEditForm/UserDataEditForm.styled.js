import { ErrorMessage, Field, Form } from 'formik';
import styled, { createGlobalStyle } from 'styled-components';

export const FormikWrapper = styled.div`
  max-width: 350px;
  margin-bottom: 16px;

  @media (min-width: 1280px) {
    max-width: 687px;
    margin-bottom: 30px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 400;

  @media (min-width: 1280px) {
    font-size: 15px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  width: 190px;
  height: 22px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.greyOutput};
  border: 1px solid ${props => props.theme.colors.greyOutput};
  border-radius: 8px;
  background: transparent;

  &:focus {
    color: ${props => props.theme.colors.textPrimary};
    outline: none;
    border: 1px solid ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 34px;
  }
`;

export const PhoneFieldGlobalStyles = createGlobalStyle`
.react-international-phone-input-container .react-international-phone-input{
  &:focus {
    color: ${props => props.theme.colors.textPrimary};
    outline: none;
    border: 1px solid ${props => props.theme.colors.hoverColor};
  }
}

  .react-international-phone-input {
    width: 153px;


    @media (min-width: 1280px) {
    width: 354px;
  }
  }

   .react-international-phone-input-container .react-international-phone-country-selector-button{
    width:37px;

    @media (min-width: 1280px) {
    width: 46px;
  }
} 
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${props => props.theme.colors.error};

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`;

export const DivErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 10px;

  @media (min-width: 1280px) {
    gap: 90px;
  }
`;

export const SubmitUserDataBtn = styled.button`
  max-width: 138px;
  padding: 12px 22px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 200px;
    padding: 18px 30px;
    border-radius: 12px;
    border: none;
    font-size: 20px;
  }
`;

export const CancelBtn = styled.button`
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;
