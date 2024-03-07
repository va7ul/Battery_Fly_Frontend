import { useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import sprite from '../../assets/images/sprite.svg';
import { PhotoBox, Image, IconSquare, IconSpiral } from "./Card.styled";

export const ProductPhoto = () => {

    const { name, image } = useSelector(selectOneProduct);
    return (
        <PhotoBox>
            <Image src={image} alt={name} />
            <IconSquare>
                <use href={`${sprite}#icon-square`}></use>
            </IconSquare>
            <IconSpiral>
                <use href={`${sprite}#icon-Spiral_2`}></use>
            </IconSpiral>
        </PhotoBox>
    );
};