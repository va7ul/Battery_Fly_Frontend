import { FC } from "react";
import { Wrapper } from "./MainWrapper.styled";
import { PropsChildren } from "../../../../@types/mainPage.types";

type Props = {
  isCategories: boolean;
};

export const MainWrapper: FC<PropsChildren & Props> = ({
  children,
  isCategories = false,
}) => {
  return <Wrapper $isCategories={isCategories}>{children}</Wrapper>;
};
