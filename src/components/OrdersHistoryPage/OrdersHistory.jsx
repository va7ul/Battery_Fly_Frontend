import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { Wrapper, Title, ContentWrapper } from './OrdersHistory.styled';
import { OrdersHistoryListEl } from './OrdersHistoryListEl/OrdersHistoryListEl';

const data = [
  {
    number: '0000000001',
    status: 'Нове',
    date: '01.02.2024',
    total: 9000.0,
  },
  {
    number: '0000000002',
    status: 'В роботі',
    date: '01.02.2024',
    total: 3000.0,
  },
  {
    number: '0000000003',
    status: 'Скасовано',
    date: '01.02.2024',
    total: 15000.0,
  },
  {
    number: '0000000004',
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
          <li>
            <p>Замовлення</p>
            <p>Статус</p>
            <p>Дата</p>
            <p>Сума</p>
          </li>
          {data.map(el => (
            <li key={el.number}>
              <OrdersHistoryListEl el={el} />
            </li>
          ))}
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};
