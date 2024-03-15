import styled from 'styled-components';

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid ${props => props.theme.colors.greyBackgroundPaper};
`;
