import { Num, SmallTitle, Text } from "./AdvantagesCard.styled";

export const AdvantagesCard = ({ text: {num, title, text } }) => {
  return (
    <>
      <Num>{num}</Num>
      <SmallTitle>{title}</SmallTitle>
      <Text>{text}</Text>
    </>
  );
};
