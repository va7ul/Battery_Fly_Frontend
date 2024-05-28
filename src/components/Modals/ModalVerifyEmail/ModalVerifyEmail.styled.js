import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 357px;
  padding: 36px 48px;

  @media (min-width: 1280px) {
    max-width: 630px;
    padding: 40px 78px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-align: center;

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 261px;
  gap: 12px;
  align-items: center;
  margin-top: 26px;

  @media (min-width: 1280px) {
    width: 476px;
    gap: 26px;
    margin-top: 50px;
  }
`;

export const Btn = styled.button`
  max-width: 128px;
  padding: 12px 28px;
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
    padding: 16px 54px;
    border-radius: 12px;
    border: none;
    font-size: 24px;
    font-weight: 400;
  }
`;
