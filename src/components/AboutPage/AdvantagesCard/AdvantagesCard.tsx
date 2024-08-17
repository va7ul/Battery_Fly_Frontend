import { FC } from 'react';
import { Num, SmallTitle, Text } from "./AdvantagesCard.styled";
import { Advantage } from '../../../@types/aboutUsPage.types';

type СardText = {
  text: Advantage;
};


export const AdvantagesCard: FC<СardText> = ({ text: {num, title, text } }) => {
  return (
    <>
      <Num>{num}</Num>
      <SmallTitle>{title}</SmallTitle>
      <Text>{text}</Text>
    </>
  );
};
