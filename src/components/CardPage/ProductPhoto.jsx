import { useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { Image } from "./Card.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProductPhoto = () => {

    const { name, image } = useSelector(selectOneProduct);

    // return (
    //     <Image src={image[0]} alt={name} />
    // );

  const settings = {
    customPaging: function(i) {
      return (
        <a href={image[i]}>
          <img src={image[i]} alt={name} /> 
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
      slidesToScroll: 1,
      // arrows: false,
      focusOnSelect: true,
      //   slide: 'img'
      //   adaptiveHeight: true
    //   centerMode: true

   
  };
  return (
    <div style={{width: '320px', padding: '0px 0px 30px 0px', margin: '0 auto'}} className="slider-container">
      <Slider {...settings}>
              {image.map((item) => <div key={item}>
        <Image src={item} alt={name} /> 
    </div>
)}
      </Slider>
    </div>
  );
};
