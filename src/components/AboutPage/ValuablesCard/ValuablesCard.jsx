import { Text } from '../SharedComponents/Text/Text';
import sprite from '../../../assets/images/sprite.svg';
import { Box, Icon, SmallTitle, Wrapper } from './ValuablesCard.styled';

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
