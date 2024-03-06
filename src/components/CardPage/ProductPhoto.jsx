import { useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { Image } from "./Card.styled";

export const ProductPhoto = () => {

    const { name, image } = useSelector(selectOneProduct);
    return (
        <Image src={image} alt={name} />
    );
};