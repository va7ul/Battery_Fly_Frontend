import {
  Container,
  Wrapper,
  Title,
  Section,
  SubTitle,
  Sntc,
  Descr,
  List,
  IconSquares,
  Link,
  NPTitle,
  NPIcon,
} from './DeliveryPayment.styled';

import sprite from '../../assets/images/sprite.svg';

export const DeliveryPayment = () => {
  return (
    <Container>
      <Wrapper>
        <IconSquares>
          <use href={`${sprite}#squares`}></use>
        </IconSquares>
        <Title>Доставка та оплата</Title>
        <Section>
          <SubTitle>Доставка</SubTitle>
          <div>
            <Sntc>Самовивіз</Sntc>
            <Descr>
              При оформленні замовлення через Інтернет-магазин, ми уточнимо час,
              коли ви зможете отримати замовлення у точці видачі - м. Львів,
              вул. Зелена, 109.
            </Descr>
          </div>
          <div>
            <NPTitle>
              <NPIcon>
                <use href={`${sprite}#nova_poshta`}></use>
              </NPIcon>
              Нова пошта
            </NPTitle>
            <Descr>
              Вартість доставки оплачується за тарифами Нової Пошти. Статус
              доставки замовлення можна відстежити
              <Link href="https://tracking.novaposhta.ua/#/uk/" target="_blank">
                тут
              </Link>
              . Також доставляємо у поштомати Нової пошти. Актуальний список
              відділень НП, що працюють
              <Link
                href="https://r51797.geo.novaposhta.ua/office/nearest"
                target="_blank"
              >
                тут
              </Link>
            </Descr>
          </div>
        </Section>
        <Section>
          <SubTitle>Оплата</SubTitle>
          <Descr>
            Якщо ви замовляєте збірку, зауважте, що в такому випадку ми працюємо
            з повною або обов’язковою частковою передоплатою - 20% від вартості
            замовлення. Адже збірка збирається індивідуально до потреб клієнта.
            Після виготовлення замовлення, у разі часткової оплати відправка
            здійснюється накладним платежем на різницю оплати, або після повної
            оплати.
          </Descr>
          <div>
            <Sntc>Готівкою</Sntc>
            <Descr>
              Оплату замовлення можна здійснити готівкою при його отриманні в
              точці видачі (тільки м. Львів).
            </Descr>
          </div>
          <div>
            <Sntc>Карткою</Sntc>
            <List>
              Оплатити замовлення карткою можна:
              <li>картою за реквізитами для фізосіб;</li>
              <li> рахунок для юридичних осіб або ФОП.</li>
              Оплата здійснюється тільки в національній валюті, картками VISA®
              та Mastercard®
            </List>
          </div>
        </Section>
      </Wrapper>
    </Container>
  );
};
