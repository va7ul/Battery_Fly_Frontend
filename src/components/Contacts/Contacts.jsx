import { SocialMedia } from "./ SocialMedia/ SocialMedia"
import { Container, Desc, Tel, Text, TextTel, Title } from "./Contacts.styled"

export const Contacts = () => { 
    return (
        <Container>
            <Title>Наші контакти</Title>
            <TextTel>Телефонуйте:</TextTel>
            <ul>
                <li>
                    <Tel href="tel:+380634350137"
                >+38 (063) 435 01 37</Tel>
                </li>
                <li>
                    <Tel href="tel:+380634350137"
                >+38 (063) 435 01 37</Tel>
                </li>
            </ul>
            <Text>Пишіть</Text>
            <Desc href="mailto:batteryfly@gmail.com"
            >batteryfly@gmail.com</Desc>
            <SocialMedia />
            <Text>Адреса точки видачі</Text>
              <Desc
                // href="https://goo.gl/maps/hResCekDZCyXk1Gw8"
                target="_blank"
                rel="noopener noreferrer nofollow"
                >м. Львів вул. Китайська, 14</Desc>
        </Container>
    )
}
