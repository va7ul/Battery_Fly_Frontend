import { Container, Logo, Box, Wrapper, Div } from "./Footer.styled";
import logo from '../../assets/images/logo.png'
import { Contacts } from "./Contacts";
import { TimeTable } from "./TimeTable";
import { Confidential } from "./Confidential";
import { ForClients } from "./ForClients";
// import { MultiButton } from "components/MultiButton/MultiButton";

export const Footer = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt='logo' />
      <Container>
        <Box>
          <Contacts />
          <Div>
            <TimeTable />
            <Confidential />
          </Div>
        </Box>
        <ForClients />
      </Container>
      {/* <MultiButton /> */}
    </Wrapper>
    
  );
};
