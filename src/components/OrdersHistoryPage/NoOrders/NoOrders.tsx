import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import { Wrapper, Title, LinkToAssortment } from './NoOrders.styled';

export const NoOrders = () => {
  return (
    <Wrapper>
      <Title>Список замовлень порожній</Title>
      <p>
        Щоб переглянути список ваших замовлень та детальну інформацію про них,
        здійсніть свою першу покупку .
      </p>
      <LinkToAssortment to="/assortment">До асортименту</LinkToAssortment>
      <PendingActionsOutlinedIcon />
    </Wrapper>
  );
};
