import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi';
import { getDate, getOrderInfo, getPrettyValue } from 'utils/helpers';
import { getOrderDetails } from '../../../redux/user/userOperations';
import { selectOrderDetails } from '../../../redux/user/userSelectors';
import { OrderDetails } from './OrderDetails/OrderDetails';
import {
  StyledText,
  OrderDetailsContainer,
  OrderDetailsList,
  PriceContainer,
  Sum,
  Discount,
  Total,
} from './OrdersHistoryListEl.styled';

export const OrdersHistoryListEl = ({ el }) => {
  const { numberOfOrder, status, date, together } = el;

  const allOrdersDetails = useSelector(selectOrderDetails);
  const dateCorrected = getDate(date);
  const data = getOrderInfo(allOrdersDetails, numberOfOrder);
  const prettyTogether = !together || getPrettyValue(together);
  const prettyTotal = !data || getPrettyValue(data.total);
  const prettyDiscount = !data || getPrettyValue(data.discountValue);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = async e => {
    if (!isOpen) {
      if (allOrdersDetails.length < 1 || !data) {
        dispatch(getOrderDetails(numberOfOrder));
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <p>№{numberOfOrder}</p>
      <StyledText type={status}>{status}</StyledText>
      <p>{dateCorrected}</p>
      <p>{prettyTogether} грн</p>
      {isOpen ? (
        <TfiArrowCircleUp onClick={handleOpen} />
      ) : (
        <TfiArrowCircleDown onClick={handleOpen} />
      )}
      {isOpen && (
        <OrderDetailsContainer>
          <OrderDetailsList>
            {data?.cartItems.map(el => (
              <li key={el._id}>
                <OrderDetails el={el} />
              </li>
            ))}
          </OrderDetailsList>
          <PriceContainer>
            <Sum>
              Загальна сума:
              <span> {prettyTotal} грн</span>
            </Sum>
            <Discount discount={data?.promoCodeDiscount}>
              Знижка за промокодом:
              <span> - {prettyDiscount} грн</span>
            </Discount>
            <Total>
              Разом:
              <span>{prettyTogether} грн</span>
            </Total>
          </PriceContainer>
        </OrderDetailsContainer>
      )}
    </>
  );
};
