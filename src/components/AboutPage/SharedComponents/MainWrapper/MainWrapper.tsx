import { FC } from "react";
import { Wrapper } from "./MainWrapper.styled";
import { PropsChildren } from '../../../../@types/aboutUsPage.types';

export const MainWrapper: FC<PropsChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
