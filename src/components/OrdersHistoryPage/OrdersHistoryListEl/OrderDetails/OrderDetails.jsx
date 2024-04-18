import noImage from '../../../../assets/images/no-image-available.webp';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
  StyledLink,
  StyledImage,
  StyledName,
  CapacityWrap,
  Capacity,
  SealingHolders,
} from './OrderDetails.styled';

export const OrderDetails = ({ el }) => {
  const {
    codeOfGood,
    name,
    image,
    price,
    quantityOrdered,
    totalPrice,
    capacityKey,
    selectedSealing,
    selectedHolder,
  } = el;

  const addDefaultImg = e => {
    e.currentTarget.src = `${noImage}`;
  };

  return (
    <>
      <StyledLink to={`../assortment/${codeOfGood}`}>
        <StyledImage
          loading="lazy"
          src={image[0] || noImage}
          alt={name}
          onError={addDefaultImg}
        />
      </StyledLink>
      <StyledName to={`../assortment/${codeOfGood}`}>{name}</StyledName>
      <p>{price} грн</p>
      <p>{quantityOrdered} шт</p>
      <p>{totalPrice} грн</p>
      {capacityKey && (
        <CapacityWrap>
          <Capacity>
            <Battery0BarIcon />
            <p>{capacityKey}Ah</p>
          </Capacity>
          {selectedSealing && (
            <SealingHolders>
              <CheckCircleOutlineIcon />
              <p>Герметизація</p>
            </SealingHolders>
          )}
          {selectedHolder && (
            <SealingHolders>
              <CheckCircleOutlineIcon />
              <p>Використовувати холдери</p>
            </SealingHolders>
          )}
        </CapacityWrap>
      )}
    </>
  );
};
