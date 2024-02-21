import {
  Container,
  Wrapper,
  Title,
  Section,
  SubTitle,
  Sntc,
  Descr,
  List,
  IconShipping,
  IconSquares,
} from './DeliveryPayment.styled';

import sprite from '../../assets/images/sprite.svg';

export const DeliveryPayment = () => {
  return (
    <Container>
      <Wrapper>
        <IconShipping>
          <use href={`${sprite}#shipping-car`}></use>
        </IconShipping>
        <IconSquares>
          <use href={`${sprite}#squares`}></use>
        </IconSquares>
        <Title>Доставка та оплата</Title>
        <Section>
          <SubTitle>Доставка</SubTitle>
          <Sntc>Самовивіз</Sntc>
          <Descr>
            При оформленні замовлення через Інтернет-магазин, ми уточнимо час,
            коли ви зможете отримати замовлення на точці видачі.
          </Descr>
          <Sntc>Нова пошта</Sntc>
          <Descr>
            Вартість доставки оплачується за тарифами Нової Пошти. Статус
            доставки замовлення можна відстежити ТУТ. Також доставляємо у
            поштомати Нової пошти. Актуальний список відділень НП, що працюють
            ТУТ
          </Descr>
        </Section>
        <Section>
          <SubTitle>Оплата</SubTitle>
          <Descr>
            Є можливість оформлення накладного платежу або ж повна оплата,
            також, якщо ви замовляєте збірку, зауважте, що в такому випадку ми
            працюємо з обов’язковою частковою передоплатою - 10% від вартості
            замовлення. Адже збірка збирається індивідуально до потреб клієнта.
          </Descr>
          <Sntc>Готівкою</Sntc>
          <Descr>
            Розрахунок по замовленню готівкою можна здійснити при його отриманні
            на точці видачі.
          </Descr>
          <Sntc>Карткою</Sntc>
          <List>
            Оплатити замовлення карткою можна:
            <li>на точці видачі при отриманні товару;</li>
            <li> під час створення замовлення в Інтернет-магазині.</li>
            Оплата здійснюється тільки в національній валюті, картками VISA® та
            Mastercard®
          </List>
        </Section>
      </Wrapper>
    </Container>
  );
};
