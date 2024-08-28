import { PropsChildren } from "../../../../@types/aboutUsPage.types";
import { Text } from "./Text.styled.styled";
import { FC } from "react";


export const TextAgree: FC<PropsChildren> = ({ children }) => {
  return <Text>{children}</Text>;
};
