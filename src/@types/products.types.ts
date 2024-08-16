type BatteryCapacity = {
  description: string;
  price: number;
  holder?: number;
};

type BatteryConfig = {
  [key: string]: BatteryCapacity;
};

export type Product = {
  _id: string;
  codeOfGood: string;
  name: string;
  description: string;
  image: string[];
  price: number | string;
  quantity: number;
  sale: boolean;
  popular: boolean;
  category: string;
  type?: string;
  capacity?: BatteryConfig;
  holder?: boolean;
  information: string;
  createdAt: string;
  updatedAt: string;
  discount: number;
};

export type ResultOneProduct = Product & {
  capacityKey: string;
  priceOneProduct: string | number;
}

export type InitialStateOneProduct = {
  result: ResultOneProduct;
  selectedHolder: boolean;
  selectedSealing: boolean;
  holderPrice: number;
  sealingPrice: number;
  quantityOrders: number;
  priceWithSale: number;
  isLoading: boolean;
  error: string | null;
}