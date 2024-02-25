import { OurServicesCard } from '../OurServicesCard/OurServicesCard';
import { Text } from '../SharedComponents/Text/Text';
import { Title } from '../SharedComponents/Title/Title';
import { Box, List, ListItem } from './OurServices.styled';

export const OurServices = ({ services }) => {
  return (
    <>
      <Box>
        <Title>Наші послуги</Title>
        <Text>
          Вітаємо вас на нашому сайті, де ми пропонуємо широкий спектр продуктів
          і послуг у сфері Li-Ion акумуляторів.
        </Text>
        <Text>Наш бізнес охоплює наступні напрямки:</Text>
      </Box>
      <List>
        {services.map((item, idx) => (
          <ListItem key={idx}>
            <OurServicesCard text={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
