import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowButton = styled.button`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0;
  margin-left: auto; */
  width: 35px;
  background-color: transparent;
  outline: none;
  border: none;
  border-left: 1px solid ${props => props.theme.colors.greyBackgroundPaper};

  & svg {
    transform: rotate(180deg);
    width: 11px;
    height: 11px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
  }
`;
