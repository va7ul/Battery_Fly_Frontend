import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/images/logo.png'
import { Contacts } from "./Contacts/Contacts";
import { TimeTable } from "./TimeTable/TimeTable";
import { Confidential } from "./Confidential/Confidential";
import { ForClients } from "./ForClients/ForClients";
import { Catalog } from './Catalog/Catalog';
import { Container, Logo, Box, Wrapper, Div } from "./Footer.styled";
// import { MultiButton } from "components/MultiButton/MultiButton";

export const Footer = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    mobileVersion ? (<Wrapper>
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
    </Wrapper>) : (<Wrapper>
      <Box>
        <Logo src={logo} alt='logo' />
        <Confidential />
      </Box>
      <Container>
        <Catalog />
        <ForClients />
        <Div>
          <Contacts />
          <TimeTable />
        </Div>
      </Container>
      {/* <MultiButton /> */}
    </Wrapper>)
  );
};
