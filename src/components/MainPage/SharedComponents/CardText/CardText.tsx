import { FC } from 'react';
import { Text } from './CardText.styled';
import { PropsChildren } from '../../../../@types/aboutUsPage.types';

export const CardText: FC<PropsChildren> = ({ children }) => {
  return <Text>{children}</Text>;
};
