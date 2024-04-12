import { useState } from 'react';
import { StyledText } from './OrdersHistoryListEl.styled';
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi';

export const OrdersHistoryListEl = ({ el }) => {
  const { number, status, date, total } = el;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = e => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <p>№{number}</p>
      <StyledText type={status}>{status}</StyledText>
      <p>{date}</p>
      <p>{total} грн</p>
      {isOpen ? (
        <TfiArrowCircleUp onClick={handleOpen} />
      ) : (
        <TfiArrowCircleDown onClick={handleOpen} />
      )}
    </>
  );
};
