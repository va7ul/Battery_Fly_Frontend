import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi';
import { getDate, getOrderInfo } from 'utils/helpers';
import { getOrderDetails } from '../../../redux/user/userOperations';
import { OrderDetails } from './OrderDetails/OrderDetails';
import { StyledText, OrderDetailsList } from './OrdersHistoryListEl.styled';
import { useSelector } from 'react-redux';
import { selectOrderDetails } from '../../../redux/user/userSelectors';

export const OrdersHistoryListEl = ({ el }) => {
  const { numberOfOrder, status, date, total } = el;

  const allOrdersDetails = useSelector(selectOrderDetails);
  const dateCorrected = getDate(date);
  const data = getOrderInfo(allOrdersDetails, numberOfOrder);

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
      <p>{total} грн</p>
      {isOpen ? (
        <TfiArrowCircleUp onClick={handleOpen} />
      ) : (
        <TfiArrowCircleDown onClick={handleOpen} />
      )}
      {isOpen && (
        <OrderDetailsList>
          {data?.cartItems.map(el => (
            <li key={el._id}>
              <OrderDetails el={el} />
            </li>
          ))}
        </OrderDetailsList>
      )}
    </>
  );
};
