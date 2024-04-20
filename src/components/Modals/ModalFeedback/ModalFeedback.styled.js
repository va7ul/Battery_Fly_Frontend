import styled, { createGlobalStyle } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  max-width: 357px;
  padding: 36px 24px 26px 24px;

  @media (min-width: 1280px) {
    max-width: 630px;
    padding: 40px 76px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 1280px) {
    font-size: 20px;
    padding: 0px 32px;
    margin-bottom: 12px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0px 24px;

  @media (min-width: 1280px) {
    padding: 0px 0px;
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

export const LabelText = styled.span`
  &::after {
    content: '*';
    color: rgba(218, 123, 106, 1);
    padding: 1px;

    @media (min-width: 1280px) {
      padding: 2px;
    }
  }
`;

export const StyledField = styled(Field)`
  width: 261px;
  height: 28px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.greyBackgroundPaper};
  border: 1px solid ${props => props.theme.colors.greyBackgroundPaper};
  border-radius: 6px;
  background: transparent;

  &:focus {
    color: ${props => props.theme.colors.greyBackgroundPaper};
    outline: none;
    border: 1px solid ${props => props.theme.colors.secondary};
  }

  @media (min-width: 1280px) {
    width: 476px;
    height: 51px;
    border-radius: 8px;
  }
`;

export const PhoneFieldGlobalStyles = createGlobalStyle`
.react-international-phone-input-container .react-international-phone-input{
  &:focus {
    color: ${props => props.theme.colors.greyBackgroundPaper};
    outline: none;
    border: 1px solid ${props => props.theme.colors.secondary};
  }
}

  .react-international-phone-input {
    width: 224px;


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
  width: 261px;
  height: 46px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.greyBackgroundPaper};
  border: 1px solid ${props => props.theme.colors.greyBackgroundPaper};
  border-radius: 6px;
  background: transparent;
  overflow-x: auto;

  &::placeholder {
    font-size: 10px;
    color: rgba(225, 225, 225, 0.7);
  }
  &:focus {
    color: ${props => props.theme.colors.greyBackgroundPaper};
    outline: none;
    border: 1px solid ${props => props.theme.colors.secondary};
  }

  @media (min-width: 1280px) {
    width: 476px;
    height: 117px;
    border-radius: 8px;

    &::placeholder {
      font-size: 14px;
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: rgba(218, 123, 106, 1);
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`;

export const DivErrorMessage = styled.div`
  color: rgba(218, 123, 106, 1);
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`;

export const Btn = styled.button`
  max-width: 128px;
  margin-top: 6px;
  padding: 12px 30px;
  border-radius: 6px;
  border: none;
  font-size: 12px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
  }
  @media (min-width: 1280px) {
    max-width: 199px;
    margin-top: 20px;
    padding: 16px 38px;
    border-radius: 12px;
    font-size: 24px;
  }
`;
