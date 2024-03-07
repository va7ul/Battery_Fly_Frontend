import sprite from '../../../assets/images/sprite.svg';
import { Icon } from './HopeIconDesktop.styled';

export const HopeIconDesktop = () => {
  return (
    <Icon>
      <use href={`${sprite}#icon-hope-2 `}></use>
    </Icon>
  );
};
