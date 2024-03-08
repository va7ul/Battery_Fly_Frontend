import sprite from '../../../assets/images/sprite.svg';
import { Icon } from './HopeIconMobile.styled';

export const HopeIconMobile = () => {
  return (
    <Icon>
      <use href={`${sprite}#icon-hope-1`}></use>
    </Icon>
  );
};
