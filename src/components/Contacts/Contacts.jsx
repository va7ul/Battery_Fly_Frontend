
import { SocialMedia } from './SocialMedia/SocialMedia';
import { Container, Text, Title, List, Box, BoxAddress, Item, ImgBot, ImgTop } from "./Contacts.styled";
import warmTop from '../../assets/images/warmTop.png';
import warmBottom from '../../assets/images/warmBottom.png';

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
            <BoxAddress>
                <a
                    href="https://maps.app.goo.gl/jQbQeDxkykSUxha9A"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >м. Львів вул. Китайська, 14</a>
            </BoxAddress>
                <ImgTop src={warmTop} alt='warm' />
                <ImgBot src={warmBottom} alt='warm' />
        </Container>
    )
};
