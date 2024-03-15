import { Box, Title, Link } from "./Footer.styled";

export const ForClients = () => {
    return (
        <Box>
            <Title>Клієнтам</Title>
            <Link to='/about'>Про нас</Link>
            <Link to='/assortment'>Асортимент</Link>
            <Link to='/delivery-and-payment'>Доставка та оплата</Link>
            <Link to='/guarantees'>Гарантії</Link>
            <Link to='/contacts'>Контакти</Link>
        </Box>
    );
};