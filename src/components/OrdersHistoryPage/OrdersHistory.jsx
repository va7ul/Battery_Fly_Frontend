import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import {
  Wrapper,
  Title,
  ContentWrapper,
  StyledOrdersHistoryEl,
} from './OrdersHistory.styled';
import { selectOrdersHistory } from '../../redux/user/userSelectors';
import { OrdersHistoryListEl } from './OrdersHistoryListEl/OrdersHistoryListEl';
import { NoOrders } from './NoOrders/NoOrders';

export const OrdersHistory = () => {
  const ordersHistory = useSelector(selectOrdersHistory);
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });

  return (
    <Wrapper>
      {desktopVersion && <SideBarNav />}
      {ordersHistory?.length ? (
        <div>
          <Title>Замовлення</Title>
          <ContentWrapper>
            <StyledOrdersHistoryEl>
              <p>Замовлення</p>
              <p>Статус</p>
              <p>Дата</p>
              <p>Сума</p>
            </StyledOrdersHistoryEl>
            {ordersHistory.map(el => (
              <StyledOrdersHistoryEl key={el.numberOfOrder}>
                <OrdersHistoryListEl el={el} />
              </StyledOrdersHistoryEl>
            ))}
          </ContentWrapper>
        </div>
      ) : (
        <NoOrders />
      )}
    </Wrapper>
  );
};
