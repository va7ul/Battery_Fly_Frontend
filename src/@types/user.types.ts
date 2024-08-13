export type OrderStatus = 'Нове' | 'В роботі' | 'Доставлено' | 'Скасовано';

export type OrderData = {
  numberOfOrder: string;
  date: string;
  together: number;
  status: OrderStatus;
};

export type UserData = {
  firstName: string;
  lastName: string;
  patronymic: string;
  tel: string;
  email: string;
};

export type Delivery = {
  city: string;
  warehouse: string;
};