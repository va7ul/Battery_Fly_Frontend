import sprite from '../../../assets/images/sprite.svg';
import { CardText } from '../SharedComponents/CardText/CardText';
import { Box, Icon, SmallTitle } from './OurServicesCard.styled';



export const OurServicesCard = ({ text: { title, text, icon } }) => {
 
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
