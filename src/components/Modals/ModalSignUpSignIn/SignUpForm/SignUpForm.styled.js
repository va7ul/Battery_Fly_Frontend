import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 261px;
  gap: 16px;

  @media (min-width: 1280px) {
    width: 478px;
    gap: 30px;
  }
`;

export const Btn = styled.button`
  max-width: 152px;
  padding: 12px 20px;
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
    max-width: 240px;
    padding: 16px 18px;
    border-radius: 12px;
    border: none;
    font-size: 24px;
    font-weight: 400;
  }
`;


export const Text = styled.p`
  font-size: 9px;

  @media (min-width: 1280px) {
    font-size: 11px;
  }
`;