import { nanoid } from '@reduxjs/toolkit';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Title } from '../SharedComponents/Title/Title';
import { Text } from '../SharedComponents/Text/Text';
import { OurServicesCard } from '../OurServicesCard/OurServicesCard';
import {
  Button,
  ButtonWrapper,
  Holder,
  ListItem,
  TextBox,
  Wrapper,
} from './OurServices.styled';

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
        breakpoints={{
          1280: {
            slidesPerView: 4,
            spaceBetween: 34,
          },
        }}
        navigation={{
          nextEl: '.custom-next-button',
          prevEl: '.custom-prev-button',
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        style={{
          height: `${!isBigScreen ? '284px' : '450px'}`,
        }}
      >
        {services.map(item => (
          <SwiperSlide key={nanoid()}>
            <ListItem key={nanoid()}>
              <OurServicesCard text={item} />
            </ListItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};
