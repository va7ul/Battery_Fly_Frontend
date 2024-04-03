import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';


export const Box = styled.div`
min-width: 226px;
min-height: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextWrapper = styled.div`
  padding: 16px 46px 0px 46px;
  margin-bottom: 10px;
  text-align: center;
  @media (min-width: 1280px) {
    padding: 30px 104px 0px 104px;
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-size: 10px;
  font-weight: 400;

   @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const ErrorText = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: red;

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Btn = styled.button`
  max-width: 87px;
  margin-bottom: 16px;
  /* margin-left: 90px; */
  padding: 10px 26px;
  border-radius: 6px;
  border: none;
  font-size: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media (min-width: 1280px) {
    max-width: 199px;
    margin-bottom: 30px;
    /* margin-left: 216px; */
    padding: 16px 60px;
    border-radius: 12px;
    font-size: 24px;

    &::after {
      border-radius: 12px;
    }
  }
`;
