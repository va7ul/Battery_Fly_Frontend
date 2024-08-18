import { SocialMedia } from './SocialMedia/SocialMedia';
import {
  Container,
  Text,
  Title,
  List,
  Box,
  BoxAddress,
  Item,
  ImgBot,
  ImgTop,
  Div,
} from './Contacts.styled';
import warmTop from '../../assets/images/warmTop.png';
import warmBottom from '../../assets/images/warmBottom.png';

export const Contacts = () => {
  return (
    <Container>
      <Title>Наші контакти</Title>
      <div>
        <Text>Телефонуйте:</Text>
        <List>
          <Item>
            <a href="tel:+380509686485">+38 (050) 968 64 85</a>
          </Item>
        </List>
      </div>
      <div>
        <Text>Пишіть:</Text>
        <Box>
          <Div>
            <a href="mailto:batteryfly@meta.ua">batteryfly@meta.ua</a>
          </Div>
          <SocialMedia />
        </Box>
      </div>
      <div>
        <Text>Адреса точки видачі:</Text>
        <BoxAddress>
          <a
            href="https://maps.app.goo.gl/HVQb7UZCPnmQ73356"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            м. Львів, Зелена, 109
          </a>
        </BoxAddress>
      </div>
      <ImgTop src={warmTop} alt="warm" />
      <ImgBot src={warmBottom} alt="warm" />
    </Container>
  );
};
