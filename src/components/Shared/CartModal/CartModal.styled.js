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

export const CloseBtn = styled.button`
  position: absolute;
  left: 12px;
  top: 12px;
  background: none;

  & svg {
    width: 26px;
    height: 26px;
  }
`;
