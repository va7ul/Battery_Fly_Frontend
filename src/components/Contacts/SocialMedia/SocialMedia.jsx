import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Item, List } from "./SocialMedia.styled"

export const SocialMedia = () => {
  return (
    <List>
      <Item>
          <FaInstagram />
      </Item>
      <Item>
          <FaViber />
      </Item>
      <Item>
          <FaTelegramPlane />
      </Item>
    </List>
  )
};
