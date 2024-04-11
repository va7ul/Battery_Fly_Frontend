import styled, { createGlobalStyle } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Wrapper = styled.div`
  max-width: 350px;
  margin-bottom: 16px;

  @media (min-width: 1280px) {
    max-width: 629px;
  }
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;

  @media (min-width: 1280px) {
    font-size: 20px;
    padding: 0px 32px;
    margin-bottom: 12px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 10px;
  font-weight: 400;

  @media (min-width: 1280px) {
    font-size: 14px;
    font-weight: 400;
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
    border: 1px solid ${props => props.theme.colors.secondary};
  }

  @media (min-width: 1280px) {
    width: 476px;
    height: 51px;
    border-radius: 8px;
  }
`;

export const PhoneFieldGlobalStyles = createGlobalStyle`
  .react-international-phone-input {
    width: 283px;
    
  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.secondary};
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
  max-width: 350px;
  height: 72px;
  padding: 4px 8px;
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
    border: 1px solid ${props => props.theme.colors.secondary};
  }

  @media (min-width: 1280px) {
    color: rgba(225, 225, 225, 1);
    width: 476px;
    height: 117px;
    border-radius: 8px;

    &::placeholder {
      font-size: 14px;
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

export const Btn = styled.button`
  max-width: 128px;
  margin-top: 6px;
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
    margin-top: 56px;
    padding: 16px 38px;
    border-radius: 12px;
    font-size: 24px;

    &::after {
      border-radius: 12px;
    }
  }
`;
