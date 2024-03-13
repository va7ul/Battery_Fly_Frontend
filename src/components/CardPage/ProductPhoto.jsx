import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { SliderDiv, ImageSmall, Image } from "./Card.styled";

export const ProductPhoto = () => {

    const { name, image } = useSelector(selectOneProduct);

    // return (
    //     <Image src={image[0]} alt={name} />
    // );

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
        // arrows: false,
        focusOnSelect: true,
        //   slide: 'li'
        //   adaptiveHeight: true
        //   centerMode: true
    };

    return (
        <SliderDiv className="slider-container">
            <Slider {...settings}>
                {image.map((item) => <div key={item}>
                    <Image src={item} alt={name} />
                </div>
                )}
            </Slider>
        </SliderDiv>
    );
};
