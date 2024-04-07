import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Wrapper = styled.div`
  max-width: 357px;
  padding: 36px 48px;

  @media (min-width: 1280px) {
    max-width: 630px;
    padding: 40px 76px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  padding: 0px 52px;
  margin-bottom: 40px;

  @media (min-width: 1280px) {
    font-size: 20px;
    padding: 0px 134px;
    margin-bottom: 50px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 261px;
  gap: 16px;
  align-items: center;

  @media (min-width: 1280px) {
    width: 476px;
    gap: 26px;
  }
`;

export const Btn = styled.button`
  max-width: 128px;
  padding: 12px 28px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 500;

  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media (min-width: 1280px) {
    max-width: 240px;
    padding: 16px 54px;
    border-radius: 12px;
    border: none;
    font-size: 24px;
    font-weight: 400;

    &::after {
      border-radius: 12px;
    }
  }
`;
