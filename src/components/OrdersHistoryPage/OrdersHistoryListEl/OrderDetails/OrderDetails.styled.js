import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledName = styled(Link)`
  text-align: center;
  color: ${props => props.theme.colors.hoverColor};
`;

export const OrderDetailsList = styled.ul`
  grid-column: 1/6;
  background: ${props => props.theme.colors.greyPrimary};
  padding: 5px 10px;

  li {
    display: grid;
    grid-template-columns: 100px repeat(4, 1fr);
    padding-top: 5px;
    padding-bottom: 5px;

    @media screen and (min-width: 1280px) {
      padding-top: 15px;
      padding-bottom: 15px;
    }

    :not(:last-child) {
      border-bottom: 1px solid ${props => props.theme.colors.textDisabled};
    }
  }
`;
