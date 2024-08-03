export type OrderStatus = 'Нове' | 'В роботі' | 'Доставлено' | 'Скасовано';

export type OrderData = {
  numberOfOrder: string;
  date: string;
  together: number;
  status: OrderStatus;
};
