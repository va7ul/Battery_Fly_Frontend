import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 70vh;
  position: relative;
  display: flex;
  flex-direction: column;

  svg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.colors.greyBackgroundPaper};
    opacity: 0.5;
  }

  p {
    position: relative;
    z-index: 1;
    text-align: center;
  }
`;

export const Title = styled.p`
  padding-top: 30vh;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    padding-top: 28vh;
    font-size: 36px;
    margin-bottom: 15px;
  }
`;

export const LinkToAssortment = styled(Link)`
  position: relative;
  z-index: 1;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  padding: 8px 6px;
  margin-top: 15px;
  background: ${props => props.theme.colors.secondary};

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    padding: 14px 10px;
    border-radius: 12px;
    margin-top: 25px;
  }

  :hover,
  :focus {
    background: ${props => props.theme.colors.hoverColor};
  }
`;
