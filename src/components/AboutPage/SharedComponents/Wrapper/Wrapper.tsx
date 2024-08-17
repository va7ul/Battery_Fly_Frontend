import { FC } from 'react';
import { SecondaryWrapper } from './Wrapper.styles';
import { PropsChildren } from '../../../../@types/aboutUsPage.types';

export const Wrapper: FC<PropsChildren> = ({ children }) => {
  return <SecondaryWrapper>{children}</SecondaryWrapper>;
};
