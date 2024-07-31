export type UserData = {
  tel: string;
  text: string;
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
