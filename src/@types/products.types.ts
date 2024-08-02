export type Product = {
  _id: string;
  codeOfGood: string;
  name: string;
  description: string;
  image: string[];
  price: number;
  quantity: number;
  sale: boolean;
  popular: boolean;
  category: string;
  type: string;
  information: string;
  createdAt: string;
  updatedAt: string;
  discount: number;
  capacity?: BatteryConfig;
};

type BatteryCapacity = {
  description: string;
  price: number;
};

type BatteryConfig = {
  [key: string]: BatteryCapacity;
};

export type ProductZbirky = {
  _id: string;
  codeOfGood: string;
  name: string;
  description: string;
  image: string[];
  price: string;
  quantity: number;
  sale: boolean;
  popular: boolean;
  category: string;
  capacity: BatteryConfig;
  holder: boolean;
  information: string;
  createdAt: string;
  updatedAt: string;
  discount: number;
  type?: string;
};
