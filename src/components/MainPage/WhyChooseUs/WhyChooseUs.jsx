import { Text } from '../SharedComponents/Text/Text';
import { Title } from '../SharedComponents/Title/Title';
import { Box, List, ListItem } from './WhyChooseUs.styled';
import { WhyChooseUsCard } from '../WhyChooseUsCard/WhyChooseUsCard';
import { MainWrapper } from '../SharedComponents/MainWrapper/MainWrapper';

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
      <List>
        {reasons.map((item, idx) => (
          <ListItem key={idx}>
            <WhyChooseUsCard text={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
