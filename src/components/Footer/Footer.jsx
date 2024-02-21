import { Box, Container, Logo, Text, Link, Title } from "./Footer.styled";
import logo from '../../assets/images/logo.png'

export const Footer = () => {
  return (
    <Container>
      <Logo src={logo} alt='logo' />
      <Text>Замовлення по телефону <a href="tel:+380931430524">+38 (093) 143-05-24</a><br/>&copy; 2023 batteryfly.ua
      </Text>
      <Text>Політика конфіденційності
      </Text>
      <Box>
        <Title>Клієнтам</Title>
        <Link to='/about'>Про нас</Link>
        <Link to='/assortment'>Асортимент</Link>
        <Link to='/delivery-and-payment'>Доставка та оплата</Link>
        <Link to='/'>Гарантії</Link>
        <Link to='/contacts'>Контакти</Link>
      </Box>
    </Container>
  );
};
