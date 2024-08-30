import { FC } from 'react';
import { Reason } from '../../../@types/mainPage.types';
import sprite from '../../../assets/images/sprite.svg';
import { CardText } from '../SharedComponents/CardText/CardText';
import { Icon } from './WhyChooseUsCard.styled';

type СardText = {
  text: Reason;
};

export const WhyChooseUsCard: FC<СardText> = ({ text: { text, icon } }) => {
  return (
    <>
      <Icon>
        <use href={`${sprite}${icon}`}></use>
      </Icon>
      <CardText>{text}</CardText>
    </>
  );
};
