import sprite from '../../../assets/images/sprite.svg';
import { CardText } from '../SharedComponents/CardText/CardText';
import { Icon } from './WhyChooseUsCard.styled';


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
