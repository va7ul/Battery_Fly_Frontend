import { Box, Title, Link } from "./Footer.styled";

export const Catalog = () => {
    return (
        <Box>
            <Title>Каталог</Title>
            <Link to='/batteries'>Акумулятори</Link>
            <Link to='/assembly'>Готові батареї</Link>
            <Link to='/batteries-for-fpv'>Батареї для FPV-дронів</Link>
            <Link to='/batteries-for-transport'>Батареї для електротранспорту</Link>
            <Link to='/batteries-for-toys'>Батареї для іграшок</Link>
            <Link to='/devices'>Прилади</Link>
            <Link to='/materials'>Розхідні матеріали</Link>
        </Box>
    );
};