import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { List } from "./SocialMedia.styled"

export const SocialMedia = () => { 
    return (
        <List>
               <li>
                {/* <a> */}
                <FaInstagram />
             
              {/* </a> */}
            </li>
              <li>
              {/* <a> */}
             <FaViber />
              {/* </a> */}
            </li>
              <li>
              {/* <a> */}
              <FaTelegramPlane />
              {/* </a> */}
            </li>
        </List>
    )
}
