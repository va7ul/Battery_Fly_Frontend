import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 261px;
  gap: 4px;
  padding-bottom: 38px;
  margin-left: 48px;
  margin-right: 48px;

  @media (min-width: 1280px) {
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 10px;
  font-weight: 600;

  @media (min-width: 1280px) {
  }
`;

export const StyledField = styled(Field)`
  width: 261px;
  height: 28px;
  padding: 4px 8px;
  border: 1px solid rgb(31, 31, 31);
  border-radius: 6px;
  background: transparent;

  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.secondary};
  }

  @media (min-width: 1280px) {

  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #da7b6a;
  font-size: 8px;
  @media (min-width: 1280px) {
  }
`;

export const Btn = styled.button`
  max-width: 152px;
  margin-top: 12px;
  margin-left: 67px;
  padding: 12px 20px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 500;

  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media (min-width: 1280px) {
    &::after {
    }
  }
`;
