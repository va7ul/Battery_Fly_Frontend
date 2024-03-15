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
        {mobileVersion ? <FaInstagram size={20}/> : <FaInstagram size={24}/>}
      </Item>
      <Item>
          {mobileVersion ? <FaViber size={20}/> : <FaViber size={24}/>}
      </Item>
      <Item>
          {mobileVersion ? <FaTelegramPlane size={20}/> : <FaTelegramPlane size={24}/>}
      </Item>
    </List>
  )
};
