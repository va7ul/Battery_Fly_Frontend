import { Text } from '../SharedComponents/Text/Text';
import { Title } from '../SharedComponents/Title/Title';
import {
  Box,
  Holder,
  IconHope,
  List,
  ListItem,
} from './WhyChooseUs.styled';
import { WhyChooseUsCard } from '../WhyChooseUsCard/WhyChooseUsCard';
import { MainWrapper } from '../SharedComponents/MainWrapper/MainWrapper';
import sprite from '../../../assets/images/sprite.svg';

export const WhyChooseUs = ({ reasons }) => {
  return (
    <>
      <MainWrapper>
        <Box>
          <Title>Чому обирають нас?</Title>
          <Text>
            Наші переваги: впевність у якості, доступна ціна та гарантія.
          </Text>
          <Text>
            Ми прагнемо надавати нашим клієнтам належну вартість та впевненість
            у якості продукції, яку ми пропонуємо.
          </Text>
          <Text>
            Наш бізнес вирізняється завдяки кільком ключовим перевагам, які
            роблять нас найкращим вибором у сфері Li-Ion акумуляторів:
          </Text>
        </Box>
      </MainWrapper>
      <Holder>
        <IconHope>
          <use href={`${sprite}#icon-about-hope`}></use>
        </IconHope>
        {/* <IconVerticalSpiral>
          <use href={`${sprite}#icon-main-vertical-spiral`}></use>
        </IconVerticalSpiral>
        <IconSpiral>
          <use href={`${sprite}#icon-about-spiral`}></use>
        </IconSpiral> */}
        <List>
          {reasons.map((item, idx) => (
            <ListItem key={idx}>
              <WhyChooseUsCard text={item} />
            </ListItem>
          ))}
        </List>
      </Holder>
    </>
  );
};
