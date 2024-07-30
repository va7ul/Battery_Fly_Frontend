type PriceList = {
  [key: string]: string;
};

type Table = {
  '100': PriceList;
  '200': PriceList;
  '300': PriceList;
  nameTable: string;
};

export type Data = {
  name: string;
  description: string;
  image: string[];
  information: string;
  accuracy: string[];
  plactic: string[];
  color: string[];
  table1: Table | null;
  table2: Table | null;
};
