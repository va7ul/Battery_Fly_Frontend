import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getHeroImages } from 'api';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { ModalFeedback } from 'components/Modals/ModalFeedback/ModalFeedback';
import { TitleWrap, Title, Wrapper, SliderButtons } from './Hero.styled';

type HeroImage = {
  _id: string;
  image: string;
  text: string;
}

export const Hero = () => {
  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState<boolean>(false);
  const [images, setImages] = useState<HeroImage[]>([]);

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

  let sliderRef = useRef<Slider | null>(null);
  
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
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
    <>
      {images && (
        <>
          <div className="slider-container" style={{ position: 'relative' }}>
            <Slider
              ref={slider => {
                sliderRef.current = slider;
              }}
              {...settings}
            >
              {images.map(({ _id, image, text }) => (
                <Wrapper background={image} key={_id}>
                  <TitleWrap>
                    <Title>{text}</Title>

                    <FeedBackButton handleOpenModal={handleOpenFeedbackModal} />
                  </TitleWrap>
                </Wrapper>
              ))}
            </Slider>
            <SliderButtons data-next={true} onClick={next}>
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
          <ModalFeedback
            isModalFeedbackOpen={isModalFeedbackOpen}
            handleCloseFeedbackModal={handleCloseFeedbackModal}
          />
        </>
      )}
    </>
  );
};
