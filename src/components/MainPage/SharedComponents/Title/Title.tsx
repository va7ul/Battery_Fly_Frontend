import { PropsChildren } from '../../../../@types/mainPage.types';
import { SecondaryTitle } from './Title.styled';
import { FC } from 'react';

export const Title:FC<PropsChildren> = ({ children }) => {
  return <SecondaryTitle>{children}</SecondaryTitle>;
};
