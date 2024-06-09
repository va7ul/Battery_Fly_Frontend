import { useMediaQuery } from 'react-responsive';
import { OurServicesCard } from '../OurServicesCard/OurServicesCard';
import { Text } from '../SharedComponents/Text/Text';
import { Title } from '../SharedComponents/Title/Title';
import {
  Button,
  ButtonWrapper,
  Holder,
  ListItem,
  TextBox,
  Wrapper,
} from './OurServices.styled';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


import 'swiper/css';



export const OurServices = ({ services }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <Wrapper>
      <Holder>
        <Title>Наші послуги</Title>
        <TextBox>
          <Text>
            Вітаємо вас на нашому сайті, де ми пропонуємо широкий спектр
            продуктів і послуг у сфері Li-Ion акумуляторів.
          </Text>
          <Text>Наш бізнес охоплює наступні напрямки:</Text>
        </TextBox>
      </Holder>
      <ButtonWrapper>
        <Button type="button" className="custom-prev-button">
          <div>
            <KeyboardArrowLeft />
          </div>
        </Button>
        <Button type="button" className="custom-next-button">
          <div>
            <KeyboardArrowRight />
          </div>
        </Button>
      </ButtonWrapper>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2}
        spaceBetween={10}
        navigation={{
          nextEl: '.custom-next-button',
          prevEl: '.custom-prev-button',
        }}
        style={{
          height: `${!isBigScreen ? '284px' : '450px'}`,
        }}
        grabCursor={true}
        breakpoints={{
          1280: {
            slidesPerView: 4,
            spaceBetween: 34,
          },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <ListItem>
            <OurServicesCard text={services[0]} />
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <OurServicesCard text={services[1]} />
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <OurServicesCard text={services[2]} />
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <OurServicesCard text={services[3]} />
          </ListItem>
        </SwiperSlide>
        <SwiperSlide>
          <ListItem>
            <OurServicesCard text={services[4]} />
          </ListItem>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
