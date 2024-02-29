import sprite from '../../../assets/images/sprite.svg';
import { Icon, Wrapper } from './WhyChooseUsCard.styled';
import { CardText } from '../SharedComponents/CardText/CardText';


export const WhyChooseUsCard = ({ text: {text, icon } }) => {
  return (
    <Wrapper>
        <Icon>
          <use href={`${sprite}${icon}`}></use>
        </Icon>
      <CardText>{text}</CardText>
    </Wrapper>
  );
};
