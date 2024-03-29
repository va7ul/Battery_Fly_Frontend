import { SocialMediaFooter } from "./SocialMediaFooter";
import { Title, Text, Box } from "./Footer.styled";

export const Contacts = () => {
    return (
        <Box>
            <Title>Контакти</Title>
            <Text>
                <a href="tel:+380931430524">+380931430524</a>
            </Text>
            <Text>
                <a href="mailto:batteryfly@meta.com">batteryfly@meta.com</a>
            </Text>
            <SocialMediaFooter />
        </Box>
    );
};