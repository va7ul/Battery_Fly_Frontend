import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TitleWrap, Title, Wrapper, SliderButtons } from './Hero.styled';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { useEffect, useRef, useState } from 'react';
import { ModalFeedback } from 'components/Modals/ModalFeedback/ModalFeedback';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getHeroImages } from 'api';

export const Hero = () => {
  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getHeroImagesSync = async () => {
      try {
        const res = await getHeroImages();
        setImages(res);
      } catch (error) {
        console.log('error', error);
      }
    };
    getHeroImagesSync();
  }, []);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
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
        {images.map(({ _id, image, text }) => (
          <Wrapper background={image} key={_id}>
            <TitleWrap>
              <Title>{text}</Title>

              <FeedBackButton handleOpenModal={handleOpenFeedbackModal} />
              <ModalFeedback
                isModalFeedbackOpen={isModalFeedbackOpen}
                handleCloseFeedbackModal={handleCloseFeedbackModal}
              />
            </TitleWrap>
          </Wrapper>
        ))}
      </Slider>
      <SliderButtons $next onClick={next}>
        <ArrowForwardIosIcon
          sx={{
            color: 'background.paper',
            width: {
              mobile: 16,
              desktop: 24,
            },
          }}
        />
      </SliderButtons>
    </div>
  );
};
