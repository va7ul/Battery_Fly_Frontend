import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  gap: 4px;
  padding: 3px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    font-size: 14px;
    min-width: 112px;
    padding: 6px 20px;
    border-radius: 10px;
  }
`;
