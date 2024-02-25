import { ListItem } from "@mui/material";
import { Text } from "../SharedComponents/Text/Text";
import { Title } from "../SharedComponents/Title/Title";
import { List } from "./WhyChooseUs.styled";
import { WhyChooseUsCard } from "../WhyChooseUsCard/WhyChooseUsCard";



export const WhyChooseUs = ({ reasons }) => {
  return (
    <>
      <Title>Чому обирають нас?</Title>
      <Text>
        Наші переваги: впевність у якості, доступна ціна та гарантія. Ми
        прагнемо надавати нашим клієнтам належну вартість та впевненість у
        якості продукції, яку ми пропонуємо. Наш бізнес вирізняється завдяки
        кільком ключовим перевагам, які роблять нас найкращим вибором у сфері
        Li-Ion акумуляторів:
      </Text>
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
