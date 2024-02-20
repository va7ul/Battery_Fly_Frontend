
import sprite from '../../../src/assets/images/sprite.svg';
import { SocialMedia } from './SocialMedia/SocialMedia';
import { Container, IconBottom, IconTop, Text, Title, List, Box, Item } from "./Contacts.styled"

export const Contacts = () => {
    return (
        <Container>
            <Title>Наші контакти</Title>
            <Text>Телефонуйте:</Text>
            <List>
                <Item>
                    <a href="tel:+380634350137">+38 (063) 435 01 37</a>
                </Item>
                <Item>
                    <a href="tel:+380634350137">+38 (063) 435 01 37</a>
                </Item>
            </List>
            <Text>Пишіть:</Text>
            <Box>
                <a href="mailto:batteryfly@gmail.com">batteryfly@gmail.com</a>
            </Box>
            <SocialMedia />
            <Text>Адреса точки видачі:</Text>
            <Box>
                <a
                    href="https://maps.app.goo.gl/jQbQeDxkykSUxha9A"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >м. Львів вул. Китайська, 14</a>
            </Box>
            <IconTop>
                <use href={`${sprite}#warm`}></use>
            </IconTop>
            <IconBottom>
                <use href={`${sprite}#warm`}></use>
            </IconBottom>
        </Container>
    )
};
