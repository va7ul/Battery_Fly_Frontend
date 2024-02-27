import { OurServicesCard } from '../OurServicesCard/OurServicesCard';
import { MainWrapper } from '../SharedComponents/MainWrapper/MainWrapper';
import { Text } from '../SharedComponents/Text/Text';
import { Title } from '../SharedComponents/Title/Title';
import { Button, ButtonWrapper, Holder, List, ListItem, Wrapper } from './OurServices.styled';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useState } from 'react';

const numberOfVisibleCards = 2;

export const OurServices = ({ services }) => {
  const [activeStep, setActiveStep] = useState(0);
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
    <MainWrapper>
      <Wrapper>
        <Holder>
          <Title>Наші послуги</Title>
          <Text>
            Вітаємо вас на нашому сайті, де ми пропонуємо широкий спектр
            продуктів і послуг у сфері Li-Ion акумуляторів.
          </Text>
          <Text>Наш бізнес охоплює наступні напрямки:</Text>
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
        </List>
      </Wrapper>
    </MainWrapper>
  );
};
