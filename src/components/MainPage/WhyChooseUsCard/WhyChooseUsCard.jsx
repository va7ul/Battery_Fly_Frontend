import sprite from '../../../assets/images/sprite.svg';
import { Icon } from './WhyChooseUsCard.styled';
import { CardText } from '../SharedComponents/CardText/CardText';


export const WhyChooseUsCard = ({ text: {text, icon } }) => {
  return (
    <>
        <Icon>
          <use href={`${sprite}${icon}`}></use>
        </Icon>
      <CardText>{text}</CardText>
    </>
  );
};
