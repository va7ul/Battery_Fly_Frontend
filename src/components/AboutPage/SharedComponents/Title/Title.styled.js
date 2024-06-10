import styled from 'styled-components';

export const SecondaryTitle = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 10px;

  @media (min-width: 1280px) {
    font-size: 40px;
    font-weight: 600;
    color: ${props => props.theme.colors.textPrimary};
    margin-bottom: 30px;
  }
`;
