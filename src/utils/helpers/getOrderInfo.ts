import { Order } from '../../@types/order.types';

export const getOrderInfo = (
  allOrdersDetails: Order[],
  orderNumber: string
): Order | undefined => {
  return allOrdersDetails.find(
    ({ numberOfOrder }) => numberOfOrder === orderNumber
  );
};
