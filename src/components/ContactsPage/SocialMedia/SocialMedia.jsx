import { useMediaQuery } from 'react-responsive';
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Item, List } from "./SocialMedia.styled"

export const SocialMedia = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <List>
      <Item>
        {mobileVersion ? <FaInstagram size={24} /> : <FaInstagram size={34} />}
      </Item>
      <Item>
        {mobileVersion ? <FaViber size={24} /> : <FaViber size={34} />}
      </Item>
      <Item>
        {mobileVersion ? <FaTelegramPlane size={24} /> : <FaTelegramPlane size={34} />}
      </Item>
    </List>
  )
};
