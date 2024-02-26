import { Box, Button, MobileStepper, Paper, Typography, useTheme } from '@mui/material';
import { OurServicesCard } from '../OurServicesCard/OurServicesCard';
import { MainWrapper } from '../SharedComponents/MainWrapper/MainWrapper';
import { Text } from '../SharedComponents/Text/Text';
import { Title } from '../SharedComponents/Title/Title';
import { Holder, List, ListItem, Wrapper } from './OurServices.styled';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const OurServices = ({ services }) => {
   const theme = useTheme();
   const [activeStep, setActiveStep] = React.useState(0);
   const maxSteps = images.length;

   const handleNext = () => {
     setActiveStep(prevActiveStep => prevActiveStep + 1);
   };

   const handleBack = () => {
     setActiveStep(prevActiveStep => prevActiveStep - 1);
   };

   const handleStepChange = step => {
     setActiveStep(step);
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
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: 'block',
                      maxWidth: 400,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
        <List>
          {services.map((item, idx) => (
            <ListItem key={idx}>
              <OurServicesCard text={item} />
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </MainWrapper>
  );
};
