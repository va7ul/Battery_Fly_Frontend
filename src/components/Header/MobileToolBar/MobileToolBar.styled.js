import styled from 'styled-components';
import { gradientTransitionBtn } from '../../../styles/GlobalStyled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 38px;
`;

export const FeedbackButton = styled.button`
  display: flex;

  align-items: center;
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  transition: background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 10px;

  background-image: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }
`;

export const Button = styled.button`
  display: block;
  background-color: transparent;
  border: none;
`;
