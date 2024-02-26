
import { SocialMedia } from './SocialMedia/SocialMedia';
import { Container, Text, Title, List, Box, BoxAddress, Item, ImgBot, ImgTop, Div } from "./Contacts.styled";
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
            </List>
            <Text>Пишіть:</Text>
            <Box>
                <Div>
                    <a href="mailto:batteryfly@meta.com">batteryfly@meta.com</a>
                </Div>
                <SocialMedia />
            </Box>
            
            <Text>Адреса точки видачі:</Text>
            <BoxAddress>
                <a
                    href="https://maps.app.goo.gl/HVQb7UZCPnmQ73356"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                >м. Львів, Зелена, 109</a>
            </BoxAddress>
            <ImgTop src={warmTop} alt='warm' />
            <ImgBot src={warmBottom} alt='warm' />
        </Container>
    );
};
