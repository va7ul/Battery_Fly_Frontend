import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/images/logo.png'
import { Contacts } from "./Contacts";
import { TimeTable } from "./TimeTable";
import { Confidential } from "./Confidential";
import { ForClients } from "./ForClients";
import { Catalog } from './Catalog';
import { Container, Logo, BoxFooter, Wrapper, Div } from "./Footer.styled";
// import { MultiButton } from "components/MultiButton/MultiButton";

export const Footer = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    mobileVersion ? (<Wrapper>
      <Logo src={logo} alt='logo' />
      <Container>
        <BoxFooter>
          <Contacts />
          <Div>
            <TimeTable />
            <Confidential />
          </Div>
        </BoxFooter>
        <ForClients />
      </Container>
      {/* <MultiButton /> */}
    </Wrapper>) : (<Wrapper>
      <BoxFooter>
        <Logo src={logo} alt='logo' />
        <Confidential />
      </BoxFooter>
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
