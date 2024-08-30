import styled, { createGlobalStyle } from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  max-width: 350px;
  margin-bottom: 16px;

  @media (min-width: 1280px) {
    max-width: 476px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;

  @media (min-width: 1280px) {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
    gap: 6px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 10px;

  @media (min-width: 1280px) {
    gap: 4px;
    font-size: 20px;
  }
`;

export const LabelText = styled.span`
  &::after {
    content: '*';
    color: ${props => props.theme.colors.error};
    padding: 1px;

    @media (min-width: 1280px) {
      padding: 2px;
    }
  }
`;

export const StyledField = styled(Field)`
  max-width: 350px;
  height: 39px;
  padding: 4px 8px;
  border: 1px solid rgba(157, 157, 157, 1);
  border-radius: 8px;
  background: transparent;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 476px;
    height: 51px;
  }
`;

export const PhoneFieldGlobalStyles = createGlobalStyle`
  .react-international-phone-input-container .react-international-phone-input{
  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.hoverColor};
  }
}  
  
  .react-international-phone-input {
    width: 283px;
    
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
  max-width: 350px;
  height: 72px;
  padding: 8px;
  border: 1px solid rgba(157, 157, 157, 1);
  border-radius: 8px;
  background: transparent;
  overflow-x: auto;

  &::placeholder {
    font-size: 10px;
    color: rgba(99, 99, 99, 0.5);
  }
  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 476px;
    height: 101px;

    &::placeholder {
      font-size: 20px;
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${props => props.theme.colors.error};
  font-size: 8px;

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
