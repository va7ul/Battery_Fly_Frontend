import { useMediaQuery } from 'react-responsive';
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Item, List } from "./SocialMedia.styled"

export const SocialMedia = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <List>
      <Item >
        <a href='https://www.instagram.com/batteryfly_ua/?igsh=ZHQwdHhuNXl5ZDV0' target='_blank'rel="noopener noreferrer nofollow">
          {mobileVersion ? <FaInstagram size={24} /> : <FaInstagram size={34} />}
          </a>
      </Item>
      <Item>
        <a href='viber://chat?number=380509686485' target='_blank' rel="noopener noreferrer nofollow">
          {mobileVersion ? <FaViber size={24} /> : <FaViber size={34} />}
          </a>
      </Item>
      <Item>
        <a href="https://t.me/BatteryFly_Lviv" target='_blank' rel="noopener noreferrer nofollow">
          {mobileVersion ? <FaTelegramPlane size={24} /> : <FaTelegramPlane size={34} />}
          </a>
      </Item>
    </List>
  )
};
