import { useMediaQuery } from 'react-responsive';
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Item, List } from "./Footer.styled";

export const SocialMediaFooter = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <List>
      <Item>
        <a href='https://www.instagram.com/batteryfly_ua/?igsh=ZHQwdHhuNXl5ZDV0' target='_blank' rel="noopener noreferrer nofollow">
          {mobileVersion ? <FaInstagram size={20} /> : <FaInstagram size={24} />}
        </a>
      </Item>
      <Item>
        <a href='viber://chat?number=380509686485' target='_blank' rel="noopener noreferrer nofollow">

          {mobileVersion ? <FaViber size={20} /> : <FaViber size={24} />}
        </a>
      </Item>
      <Item>
        <a href="https://t.me/BatteryFly_Lviv" target='_blank' rel="noopener noreferrer nofollow">
          {mobileVersion ? <FaTelegramPlane size={20} /> : <FaTelegramPlane size={24} />}
        </a>
      </Item>
    </List>
  )
};
