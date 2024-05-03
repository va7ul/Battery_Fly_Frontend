import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FormikWrapper = styled.div`
  max-width: 350px;

  @media (min-width: 1280px) {
    max-width: 687px;
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
  position: relative;
`;

export const StyledField = styled(Field)`
  width: 160px;
  height: 22px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.textPrimary};
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

export const StyledErrorMessage = styled(ErrorMessage)`
  color: rgba(218, 123, 106, 1);
  font-size: 8px;

  @media (min-width: 1280px) {
    font-size: 12px;
  }
`;