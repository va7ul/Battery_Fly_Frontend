import { FC, SyntheticEvent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import noImage from '../../../assets/images/no-image-available.webp';
import { SliderDiv, ImageBig, Image } from './ProductPhoto.styled';

type ProductPhotoProps = {
  name: string;
  image: string[];
};

export const ProductPhoto: FC<ProductPhotoProps>  = ({ name, image }) => {

    const addDefaultImg = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = noImage;
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return image.length > 1 ? (
    <SliderDiv className="slider-container">
      <Slider {...settings}>
        {image.map(item => (
          <div key={item}>
            <ImageBig src={item} alt={name} />
          </div>
        ))}
      </Slider>
    </SliderDiv>
  ) : (
    <Image src={image[0] || noImage} alt={name} onError={addDefaultImg}/>
  );
};
