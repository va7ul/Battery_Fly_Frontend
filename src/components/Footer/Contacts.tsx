import { SocialMediaFooter } from "./SocialMediaFooter";
import { Title, Text, Box } from "./Footer.styled";

export const Contacts = () => {
    return (
        <Box>
            <Title>Контакти</Title>
            <Text>
                <a href="tel:+380509686485">+380509686485</a>
            </Text>
            <Text>
                <a href="mailto:batteryfly@meta.ua">batteryfly@meta.ua</a>
            </Text>
            <SocialMediaFooter />
        </Box>
    );
};