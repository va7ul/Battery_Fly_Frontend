import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { Wrapper, Title } from './OrdersHistory.styled';

export const OrdersHistory = () => {
  return (
    <Wrapper>
      <SideBarNav />
      <div>
        <Title>Замовлення</Title>
      </div>
    </Wrapper>
  );
};
