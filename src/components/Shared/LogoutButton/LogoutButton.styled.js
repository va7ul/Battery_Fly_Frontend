import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 12px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  padding-right: 100%;
  &:hover {
    color: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`;
