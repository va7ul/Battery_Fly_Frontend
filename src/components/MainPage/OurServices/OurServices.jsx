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
import { useRef } from 'react';

import { register } from 'swiper/element/bundle';
register();

export const OurServices = ({ services }) => {
  const swiperElRef = useRef(null);
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

      <swiper-container
        ref={swiperElRef}
        slides-per-view="2"
        space-between="10"
        navigation="true"
        grab-cursor="true"
        breakpoints={JSON.stringify({
          1280: {
            slidesPerView: 4,
            spaceBetween: 34,
          },
        })}
        navigation-next-el=".custom-next-button"
        navigation-prev-el=".custom-prev-button"
        autoplay-delay="5000"
        loop={true}
        inject-styles={JSON.stringify([
          `.swiper{
            height: ${!isBigScreen ? '284px' : '450px'};
          }
          `,
        ])}
      >
        <swiper-slide>
          <ListItem>
            <OurServicesCard text={services[0]} />
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <OurServicesCard text={services[1]} />
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <OurServicesCard text={services[2]} />
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <OurServicesCard text={services[3]} />
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <OurServicesCard text={services[4]} />
          </ListItem>
        </swiper-slide>
      </swiper-container>
    </Wrapper>
  );
};
