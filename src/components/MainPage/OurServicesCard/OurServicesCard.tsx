import { FC } from 'react';
import { Service } from '../../../@types/mainPage.types';
import sprite from '../../../assets/images/sprite.svg';
import { CardText } from '../SharedComponents/CardText/CardText';
import { Box, Icon, SmallTitle } from './OurServicesCard.styled';

type Props = {
  text: Service;
};

export const OurServicesCard: FC<Props> = ({ text: { title, text, icon } }) => {
  return (
    <>
      <Box>
        <Icon>
          <use href={`${sprite}${icon}`}></use>
        </Icon>
        <SmallTitle>{title}</SmallTitle>
      </Box>
      <CardText>{text}</CardText>
    </>
  );
};