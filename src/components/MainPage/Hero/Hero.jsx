import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TitleWrap, Title, Wrapper, SliderButtons } from './Hero.styled';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { useRef, useState } from 'react';
import { ModalFeedback } from 'components/Modals/ModalFeedback/ModalFeedback';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  {
    url: 'https://media1.tenor.com/m/O3VnTGc9z8EAAAAd/cat-zone-of-zone-out-cat.gif',
    title: 'Юля і Вася: фото в кольорі',
  },
  {
    url: 'https://media1.tenor.com/m/l5sIE_3H3EEAAAAd/cats-fighting-fighting-cats.gif',
    title: 'Наталя демонструє Вові, як її виховала вулиця',
  },
  {
    url: 'https://media1.tenor.com/m/ZAMoMuQgf9UAAAAd/mapache-pedro.gif',
    title: 'Діма, коли треба написати бек з нуля, а не переписувати за Ірою',
  },
  {
    url: 'https://media1.tenor.com/m/cor0ZSgUarIAAAAd/cat-goofy-cat.gif',
    title: 'Ріта тіки прокинулась і розуміє, що через пару годин зум',
  },
];

export const Hero = () => {
  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState(false);

  const handleOpenFeedbackModal = () => {
    setIsModalFeedbackOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseFeedbackModal = () => {
    setIsModalFeedbackOpen(false);
    document.body.style.overflow = 'unset';
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  // const previous = () => {
  //   sliderRef.slickPrev();
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
  };
  return (
    <div className="slider-container" style={{ position: 'relative' }}>
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {images.map(({ url, title }) => (
          <Wrapper background={url} key={url}>
            <TitleWrap>
              <Title>{title}</Title>

              <FeedBackButton handleOpenModal={handleOpenFeedbackModal} />
              <ModalFeedback
                isModalFeedbackOpen={isModalFeedbackOpen}
                handleCloseFeedbackModal={handleCloseFeedbackModal}
              />
            </TitleWrap>
          </Wrapper>
        ))}
      </Slider>
      <div style={{ textAlign: 'center' }}>
        {/* <SliderButtons $prev onClick={previous}>
          <ArrowBackIosIcon
            sx={{
              color: 'background.default',
            }}
          />
        </SliderButtons> */}
        <SliderButtons $next onClick={next}>
          <ArrowForwardIosIcon
            sx={{
              // color: 'background.default',
              color: 'text.disabled',
            }}
          />
        </SliderButtons>
      </div>
    </div>
  );
};
