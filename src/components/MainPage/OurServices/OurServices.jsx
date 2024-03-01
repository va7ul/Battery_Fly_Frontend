import { useMediaQuery } from 'react-responsive';
import { OurServicesCard } from '../OurServicesCard/OurServicesCard';
import { Text } from '../SharedComponents/Text/Text';
import { Title } from '../SharedComponents/Title/Title';
import {
  Button,
  ButtonWrapper,
  Holder,
  List,
  ListItem,
  TextBox,
  Wrapper,
} from './OurServices.styled';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useState } from 'react';

export const OurServices = ({ services, isCard }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const [activeStep, setActiveStep] = useState(0);
  
  let numberOfVisibleCards = null;

  isBigScreen ? (numberOfVisibleCards = 4) : (numberOfVisibleCards = 2);
  const maxSteps = Math.round(services.length / numberOfVisibleCards);

  if (activeStep > maxSteps) {
    setActiveStep(0);
  }

  if (activeStep === -1) {
    setActiveStep(maxSteps);
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  return (
    <Wrapper>
      <Holder>
        <Title>Наші послуги</Title>
        <TextBox >
          <Text>
            Вітаємо вас на нашому сайті, де ми пропонуємо широкий спектр
            продуктів і послуг у сфері Li-Ion акумуляторів.
          </Text>
          <Text>Наш бізнес охоплює наступні напрямки:</Text>
        </TextBox>
      </Holder>
      <ButtonWrapper>
        <Button type="button" onClick={handleBack}>
          <KeyboardArrowLeft />
        </Button>
        <Button type="button" onClick={handleNext}>
          <KeyboardArrowRight />
        </Button>
      </ButtonWrapper>
      <List>
        <ListItem onClick={handleBack}>
          <OurServicesCard text={services[activeStep]} />
        </ListItem>
        <ListItem onClick={handleNext}>
          <OurServicesCard text={services[activeStep + 1]} />
        </ListItem>
        {isBigScreen && (
          <>
            <ListItem onClick={handleBack}>
              <OurServicesCard text={services[activeStep + 2]} />
            </ListItem>
            <ListItem onClick={handleNext}>
              <OurServicesCard text={services[activeStep + 3]} />
            </ListItem>
          </>
        )}
      </List>
    </Wrapper>
  );
};
