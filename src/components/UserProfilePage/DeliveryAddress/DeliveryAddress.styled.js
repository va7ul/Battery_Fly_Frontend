import styled from 'styled-components';

export const Subtitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

export const AddButton = styled.button`
  max-width: 138px;
  padding: 12px 20px;
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
    max-width: 200px;
    padding: 18px 24px;
    border-radius: 12px;
    border: none;
    font-size: 20px;
  }
`;