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
    _id: '662e4b4df04b85608f6b5843',
    text: 'Потужність у кожному кілометрі: наші електричні батареї для вашого транспорту!',
    image:
      'https://res.cloudinary.com/dge7alacy/image/upload/v1714309887/Hero/yx3zqxzkv9bvlygisq2v.png',
  },
  {
    _id: '662e4bc3f04b85608f6b5844',
    text: 'Безмежна енергія для захоплюючих політів: батареї для FPV дронів!',
    image:
      'https://res.cloudinary.com/dge7alacy/image/upload/v1714309886/Hero/ir8j18htynnf3wnessba.png',
  },
  {
    _id: '662e4c1cf04b85608f6b5845',
    text: 'Втілюй ідеї у реальність: 3D друк на кожен день!',
    image:
      'https://res.cloudinary.com/dge7alacy/image/upload/v1714309886/Hero/a0czcwwqskwdnfqq2f3k.png',
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
              color: 'background.default',
            }}
          />
        </SliderButtons>
      </div>
    </div>
  );
};
