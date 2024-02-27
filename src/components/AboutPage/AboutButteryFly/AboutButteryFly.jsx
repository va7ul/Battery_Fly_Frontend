import { Text } from '../SharedComponents/Text/Text';
import { Wrapper } from '../SharedComponents/Wrapper/Wrapper';
import { MainTitle } from './AboutButteryFly.styled';

export const AboutButteryFly = () => {
  return (
    <Wrapper>
      <MainTitle>Про BATTERYFLY</MainTitle>
      <Text>
        Ми - сучасна компанія, яка спеціалізується продажі, обслуговуванні та
        ремонті Li-Ion акумуляторів. З моменту нашого заснування, ми присвятили
        себе досягненню високої якості, надійності та інновацій у цій галузі.
      </Text>
    </Wrapper>
  );
};
