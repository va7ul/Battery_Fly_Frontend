import styled from 'styled-components';

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px;
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
    z-index: 2;
  }

  @media screen and (max-width: 1280px) {
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: start;
  width: 24px;
  margin: 0;
  margin-right: 80px;
  background-color: transparent;
  outline: none;
  border: none;

  & svg {
    width: 18px;
    height: 18px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
  }
`;

export const TitleText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
