import { Text } from '../SharedComponents/Text/Text';
import sprite from '../../../assets/images/sprite.svg';
import { Icon, Wrapper } from './WhyChooseUsCard.styled';


export const WhyChooseUsCard = ({ text: {text, icon } }) => {
  return (
    <Wrapper>
        <Icon>
          <use href={`${sprite}${icon}`}></use>
        </Icon>
      <Text>{text}</Text>
    </Wrapper>
  );
};
