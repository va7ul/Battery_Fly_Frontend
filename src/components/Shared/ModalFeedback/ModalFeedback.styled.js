import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align:center;
  padding: 35px 24px 10px 24px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0px 48px 26px 48px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 10px;
  font-weight: 600;
`;

export const StyledField = styled(Field)`
  max-width: 261px;
  padding: 4px 8px;

  border: 1px solid rgb(99, 99, 99);
  border-radius: 6px;
  background: transparent;

  &:focus {
    color: rgb(225, 225, 225);
    outline: none;
    border: 1px solid rgba(255, 208, 100, 0.7);
    box-shadow: 0px 0px 4px 4px rgba(255, 208, 100, 0.7);
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #da7b6a;
  font-size: 12px;
`;

export const Btn = styled.button`
max-width: 128px;
  display: flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 6px;
  border: none;
  font-size: 12px;

  background-image: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  /* @media (min-width: 1280px) {
    position: relative;
    margin-left: 110px;
    padding: 16px 38px;
    border-radius: 12px;
    font-size: 24px;
    background: ${props => props.theme.colors.gradient};

    &::after {
      border-radius: 12px;
    }
  } */
`;
