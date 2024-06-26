import sprite from '../../../assets/images/sprite.svg';
import { Text } from '../SharedComponents/Text/Text';
import { Box, Icon, SmallTitle } from './ValuablesCard.styled';

export const ValuablesCard = ({ text: { title, text, icon } }) => {
  return (
    <>
      <Box>
        <SmallTitle>{title}</SmallTitle>
        <Icon>
          <use href={`${sprite}${icon}`}></use>
        </Icon>
      </Box>
      <Text>{text}</Text>
    </>
  );
};
