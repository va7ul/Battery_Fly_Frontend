import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { SliderDiv, ImageSmall, ImageBig, Image } from "./Card.styled";

export const ProductPhoto = () => {

    const { name, image } = useSelector(selectOneProduct);

    const settings = {
        customPaging: function (i) {
            return (
                <a href={image[i]}>
                    <ImageSmall src={image[i]} alt={name} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        adaptiveHeight: true,
    };

    return (
        image.length > 1 ? ( <SliderDiv className="slider-container">
            <Slider {...settings}>
                {image.map((item) => <div key={item}>
                    <ImageBig src={item} alt={name} />
                </div>
                )}
            </Slider>
        </SliderDiv>) : (<Image src={image[0]} alt={name} /> )
      
    );
};
