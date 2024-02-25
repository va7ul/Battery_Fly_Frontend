import { useState } from 'react';
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { VscCallOutgoing, VscCallIncoming } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { RiChatSmile3Line } from "react-icons/ri";
import { RiChatSmile2Line } from "react-icons/ri";
import { Wrapper, List, Icon, Item, Insta, Button } from "./MultiButton.styled";

export const MultiButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [visibility, setVisibility] = useState("hidden");
    const [transition, setTransition] = useState(" ");
    const [opacity, setOpacity] = useState("0");
    const [transform, setTransform] = useState("scaleX(0.4) scaleY(0.4) translateY(150px)");

    const openButton = () => {
        setIsHovered(true)
        setVisibility("visible")
        setTransition('0.3s ease')
        setOpacity('1')
        setTransform('scaleX(1) scaleY(1) translateY(0)')
    }
    
    const closeButton = () => {
        setIsHovered(false)
        setVisibility("hidden")
        setTransition(' ')
        setOpacity('0')
        setTransform('scaleX(0.4) scaleY(0.4) translateY(150px)')
    }

    return (
        <Wrapper onMouseLeave={closeButton}>
            <List style={{ visibility: visibility, transition: transition, transform: transform, opacity: opacity }}>
                <Item style={{ background: '#7b519d' }} >
                    <Icon>
                        <FaViber size={30} />
                    </Icon>
                </Item>
                <Insta >
                    <Icon>
                        <FaInstagram size={30} />
                    </Icon>
                </Insta>
                <Item style={{ background: '#03a9f4' }}>
                    <Icon>
                        <FaTelegramPlane size={30} />
                    </Icon>
                </Item>
                <Item style={{ background: '#9ACD32' }}>
                    <Icon>
                        <MdOutlineEmail size={30} />
                    </Icon>
                </Item>
                <Item style={{ background: '#80CDC1' }}>
                    <Icon>
                        <VscCallIncoming size={30} />
                    </Icon>
                </Item>
                <Item style={{ background: '#018571' }}>
                    <Icon>
                        <VscCallOutgoing size={30} />
                    </Icon>
                </Item>
            </List>
            <Button onMouseEnter={openButton}>
                {isHovered ? <RiChatSmile3Line size={44} /> : <RiChatSmile2Line size={44} />}
            </Button>
        </Wrapper>
    );
};