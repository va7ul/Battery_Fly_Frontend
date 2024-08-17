import { Product } from './products.types';

export type UserData = {
  tel: string;
  text: string;
};

export type UserDataInOrder = {
  firstName: string;
  lastName: string;
  email: string
};

export type DeliveryInfo = {
  deliveryType: string;
  cities: string[];
  warehouses: string[];
  payment: string;
  city: string;
  warehouse: string;
};

export type PromoCode = {
  _id: string;
  name: string;
  discount: number;
  valid: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CartItem = Product & {
  capacityKey: string;
  selectedSealing: boolean;
  selectedHolder: boolean;
  quantityOrdered: number;
  totalPrice: number;
  priceOneProduct: number;
};

export type Order = {
  _id: string;
  status: string;
  numberOfOrder: string;
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
  tel: string;
  total: number;
  promoCode: string;
  promoCodeDiscount: number;
  discountValue: number;
  together: number;
  cartItems: CartItem[];
  deliveryType: string;
  city: string;
  warehouse: string;
  payment: string;
  createdAt: string;
  updatedAt: string;
};

export type orderData = {
  userData: UserDataInOrder & UserData;
  total: number;
  promoCode: string;
  promoCodeDiscount: number;
  discountValue: number;
  together: number;
  cartItems: CartItem[];
  deliveryType: string;
  city: string;
  warehouse: string;
  payment: string;
};
