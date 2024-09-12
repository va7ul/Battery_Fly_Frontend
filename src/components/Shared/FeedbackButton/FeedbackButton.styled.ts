import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  width: 88px;
  align-items: center;
  justify-content: center;
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  font-size: 12px;
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    width: 200px;
    padding: 16px 38px;
    border-radius: 12px;
    font-size: 24px;
  }
`;
