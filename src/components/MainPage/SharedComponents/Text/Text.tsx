import { FC } from 'react';
import { PropsChildren } from '../../../../@types/mainPage.types';
import { Description } from './Text.styled';

export const Text:FC<PropsChildren> = ({ children }) => {
  return <Description>{children}</Description>;
};
