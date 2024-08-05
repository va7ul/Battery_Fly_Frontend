import { useState, MouseEvent } from 'react';
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi';
import { OrderData } from '../../../@types/user.types';
import { getDate, getOrderInfo, getPrettyValue } from 'utils/helpers';
import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import { getOrderDetails } from '../../../redux/user/userOperations';
import {
  selectOrderDetails,
  selectErrorOrder,
} from '../../../redux/user/userSelectors';
import { OrderDetails } from './OrderDetails/OrderDetails';
import {
  StyledText,
  OrderErrorContainer,
  OrderDetailsContainer,
  OrderDetailsList,
  PriceContainer,
  TextContainer,
  TextTitle,
  Text,
  Sum,
  Discount,
  Total,
} from './OrdersHistoryListEl.styled';
import { CustomError } from 'components/Shared/CustomError/CustomError';

type PropsOrdersHistoryListEl = {
  el: OrderData;
};

export const OrdersHistoryListEl: React.FC<PropsOrdersHistoryListEl> = ({
  el,
}) => {
  const { numberOfOrder, status, date, together } = el;

  const allOrdersDetails = useTypedSelector(selectOrderDetails);
  const error = useTypedSelector(selectErrorOrder);
  const dateCorrected = getDate(date);
  const data = getOrderInfo(allOrdersDetails, numberOfOrder);
  const prettyTogether = !together || getPrettyValue(together);
  const prettyTotal = !data || getPrettyValue(data.total);
  const prettyDiscount = !data || getPrettyValue(data.discountValue);

  const dispatch = useTypedDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = async (e: MouseEvent<SVGElement>) => {
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
      {isOpen &&
        (error ? (
          <OrderErrorContainer>
            <CustomError />
          </OrderErrorContainer>
        ) : (
          <OrderDetailsContainer>
            <OrderDetailsList>
              {data?.cartItems.map(el => (
                <li key={el._id}>
                  <OrderDetails el={el} />
                </li>
              ))}
            </OrderDetailsList>
            <PriceContainer>
              <TextContainer>
                <TextTitle>Доставка: </TextTitle>
                <Text>{data?.deliveryType}</Text>
              </TextContainer>
              <TextContainer>
                <TextTitle>Адреса: </TextTitle>
                <Text>
                  {data?.city}, {data?.warehouse}
                </Text>
              </TextContainer>
              <TextContainer>
                <TextTitle>Спосіб оплати: </TextTitle>
                <Text>{data?.payment}</Text>
              </TextContainer>
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
        ))}
    </>
  );
};
