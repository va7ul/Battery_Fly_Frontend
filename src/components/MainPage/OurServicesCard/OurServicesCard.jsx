import { Text } from '../SharedComponents/Text/Text';
import sprite from '../../../assets/images/sprite.svg';
import { Box, Icon, SmallTitle, Wrapper } from './OurServicesCard.styled';

export const OurServicesCard = ({ text: { title, text, icon } }) => {
  return (
    <Wrapper>
      <Box>
        <Icon>
          <use href={`${sprite}${icon}`}></use>
        </Icon>
        <SmallTitle>{title}</SmallTitle>
      </Box>
      <Text>{text}</Text>
    </Wrapper>
  );
};
