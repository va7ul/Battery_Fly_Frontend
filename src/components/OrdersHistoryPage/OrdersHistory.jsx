import { useState } from 'react';
import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import sprite from '../../assets/images/sprite.svg';
import {
  Wrapper,
  Title,
  ContentWrapper,
  // HeadWrapper,
  // ListElWrapper,
  StyledText,
  ArrowButton,
} from './OrdersHistory.styled';

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
  // const [anchorEl, setAnchorEl] = useState();

  // const handleOpen = e => {
  //   e.preventDefault();
  //   setAnchorEl(e.currentTarget);
  // };

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
              <p>№{el.number}</p>
              <StyledText type={el.status}>{el.status}</StyledText>
              <p>{el.date}</p>
              <p>{el.total} грн</p>
              <ArrowButton
                type="button"
                // handleOpen={anchorEl}
                // onClick={handleOpen}
              >
                <svg>
                  <use href={`${sprite}#arrow-left`}></use>
                </svg>
              </ArrowButton>
            </li>
          ))}
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};
