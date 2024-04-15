import { Link } from 'react-router-dom';
import noImage from '../../../../assets/images/no-image-available.webp';
import { StyledName } from './OrderDetails.styled';

export const OrderDetails = ({ el }) => {
  const {
    codeOfGood,
    name,
    image,
    price,
    quantityOrdered,
    totalPrice,
    // capacityKey,
    // selectedSealing,
    // selectedHolder,
  } = el;

  const addDefaultImg = e => {
    e.currentTarget.src = `${noImage}`;
  };

  return (
    <>
      <Link to={`../assortment/${codeOfGood}`}>
        <img
          loading="lazy"
          src={image[0] || noImage}
          alt={name}
          onError={addDefaultImg}
        />
      </Link>
      <StyledName to={`../assortment/${codeOfGood}`}>{name}</StyledName>
      <p>{price} грн</p>
      <p>{quantityOrdered} шт</p>
      <p>{totalPrice} грн</p>
    </>
  );
};
