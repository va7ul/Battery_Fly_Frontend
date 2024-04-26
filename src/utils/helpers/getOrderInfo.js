export const getOrderInfo = (allOrdersDetails, orderNumber) => {
  return allOrdersDetails.find(
    ({ numberOfOrder }) => numberOfOrder === orderNumber
  );
};
