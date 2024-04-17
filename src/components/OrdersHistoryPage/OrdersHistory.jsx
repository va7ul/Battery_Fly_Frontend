import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import {
  Wrapper,
  Title,
  ContentWrapper,
  StyledOrdersHistoryEl,
} from './OrdersHistory.styled';
import { OrdersHistoryListEl } from './OrdersHistoryListEl/OrdersHistoryListEl';

const data = [
  {
    number: '00000001',
    status: 'Нове',
    date: '01.02.2024',
    total: 9000.0,
  },
  {
    number: '00000002',
    status: 'В роботі',
    date: '01.02.2024',
    total: 3000.0,
  },
  {
    number: '00000003',
    status: 'Скасовано',
    date: '01.02.2024',
    total: 15000.0,
  },
  {
    number: '00000004',
    status: 'Доставлено',
    date: '01.02.2024',
    total: 7000.0,
  },
];

export const OrdersHistory = () => {
  return (
    <Wrapper>
      <SideBarNav />
      <div>
        <Title>Замовлення</Title>
        <ContentWrapper>
          <StyledOrdersHistoryEl>
            <p>Замовлення</p>
            <p>Статус</p>
            <p>Дата</p>
            <p>Сума</p>
          </StyledOrdersHistoryEl>
          {data.map(el => (
            <StyledOrdersHistoryEl key={el.number}>
              <OrdersHistoryListEl el={el} />
            </StyledOrdersHistoryEl>
          ))}
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};
