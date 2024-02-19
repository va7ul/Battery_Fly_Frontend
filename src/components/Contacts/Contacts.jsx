import { SocialMedia } from "./ SocialMedia/ SocialMedia"
import { Container, Desc, Tel, Text, TextTel, Title } from "./Contacts.styled"

export const Contacts = () => { 
    return (
        <Container>
            <Title>Наші контакти</Title>
            <TextTel>Телефонуйте:</TextTel>
            <ul>
                <li>
                    <Tel>+38 (063) 435 01 37</Tel>
                </li>
                <li>
                    <Tel>+38 (063) 435 01 37</Tel>
                </li>
            </ul>
            <Text>Пишіть</Text>
            <Desc>batteryfly@gmail.com</Desc>
            <SocialMedia />
            <Text>Адреса точки видачі</Text>
              <Desc>м. Львів вул. Китайська, 14</Desc>
        </Container>
    )
}
