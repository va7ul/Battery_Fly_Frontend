import { FC } from "react";
import { SecondaryTitle } from "./Title.styled";
import { PropsChildren } from '../../../../@types/aboutUsPage.types';

export const Title: FC<PropsChildren> = ({ children }) => {
  return <SecondaryTitle>{children}</SecondaryTitle>;
};
