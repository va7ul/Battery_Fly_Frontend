import styled from 'styled-components';

export const getStatusColor = props => {
  switch (props.type) {
    case 'Нове':
      return props.theme.colors.warning;
    case 'В роботі':
      return props.theme.colors.hoverColor;
    case 'Скасовано':
      return props.theme.colors.error;
    case 'Доставлено':
      return props.theme.colors.success;
    default:
      return;
  }
};

export const StyledText = styled.p`
  font-weight: 700;
  color: ${getStatusColor};
`;

export const OrderDetailsContainer = styled.div`
  grid-column: 1/6;
  /* background: papayawhip; */
  background: rgba(244, 170, 0, 0.1);
  padding: 5px 10px;
`;

export const OrderDetailsList = styled.ul`
  border-bottom: 1px solid ${props => props.theme.colors.textDisabled};

  li {
    display: grid;
    grid-template-columns: 60px 100px repeat(3, 1fr);
    padding-top: 5px;
    padding-bottom: 5px;

    @media screen and (min-width: 1280px) {
      grid-template-columns: 100px 250px repeat(3, 1fr);
      padding-top: 15px;
      padding-bottom: 15px;
    }

    /* :not(:last-child) {
      border-bottom: 1px solid ${props => props.theme.colors.textDisabled};
    } */
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 4px;
  padding: 5px 8px;
  border-radius: 8px;

  @media screen and (min-width: 1280px) {
    gap: 8px;
    padding: 10px;
  }
`;

export const Sum = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Discount = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  span {
    color: ${props =>
      props.discount ? props.theme.colors.success : 'inherit'};
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Total = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    text-align: end;
    border: none;
    font-size: 24px;
  }
`;
