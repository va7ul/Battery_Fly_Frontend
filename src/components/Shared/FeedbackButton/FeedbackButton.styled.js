import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  font-size: 10px;
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    position: relative;
    margin-left: 110px;
    padding: 16px 38px;
    border-radius: 12px;
    font-size: 24px;
  }
`;
