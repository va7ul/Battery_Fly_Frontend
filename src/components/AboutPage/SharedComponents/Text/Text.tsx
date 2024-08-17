import { FC } from 'react';
import { Description } from "./Text.styled.styled";
import { PropsChildren } from '../../../../@types/aboutUsPage.types';

export const Text: FC<PropsChildren> = ({ children }) => {
  return <Description>{children}</Description>;
};
