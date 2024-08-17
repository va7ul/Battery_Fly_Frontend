import { ReactNode } from "react";

export type PropsChildren = {
  children: ReactNode;
};

export type Value = {
  title: string;
  icon: string;
  text: string;
};

export type Advantage = {
  num: number;
  title: string;
  text: string;
};
