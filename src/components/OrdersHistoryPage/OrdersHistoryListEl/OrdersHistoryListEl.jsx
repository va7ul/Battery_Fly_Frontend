import { useState } from 'react';
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi';
import { OrderDetails } from './OrderDetails/OrderDetails';
import { StyledText, OrderDetailsList } from './OrdersHistoryListEl.styled';
import { getDate } from 'utils/helpers';

export const OrdersHistoryListEl = ({ el }) => {
  const data = [
    {
      _id: '65eb7298fd80cd2e1934c7ac',
      codeOfGood: '1013',
      name: 'Акумулятор Molice',
      image: ['https://hobbymania.com.ua/img/img_medium/7675_250_1.jpg'],
      price: 198,
      quantityOrdered: 2,
      totalPrice: 396,
      capacityKey: '',
      selectedSealing: false,
      selectedHolder: false,
    },
    {
      _id: '65eb6fa6fd80cd2e1934c784',
      codeOfGood: '1013',
      name: 'Літієва батарея 48 Вольт https://quantum-energy.ua/wp-content/uploads/2023/12/DSC_0191-1-1024x657.jpg',
      image: [
        'https://quantum-energy.ua/wp-content/uploads/2023/12/DSC_0191-1-1024x657.jpg',
      ],
      price: 4878,
      quantityOrdered: 2,
      totalPrice: 9756,
      capacityKey: '9',
      selectedSealing: true,
      selectedHolder: true,
    },
  ];

  const { numberOfOrder, status, date, total } = el;
  const dateCorrected = getDate(date);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = e => {
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
          {data.map(el => (
            <li key={el._id}>
              <OrderDetails el={el} />
            </li>
          ))}
        </OrderDetailsList>
      )}
    </>
  );
};
