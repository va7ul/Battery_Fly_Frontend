import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FeedbackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  background-image: ${props => props.theme.colors.gradient};
  border-radius: 6px;
  border: none;
  transition: background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 10px;
  &:hover {
    background-image: ${props => props.theme.colors.gradientHover};
  }
`;

export const Button = styled.button`
  display: block;
  width: 20px;
  background-color: transparent;
  border: none;
`;
