import toast from 'react-hot-toast';
import { useTypedDispatch, useTypedSelector } from '../../../../redux/hooks';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
  changeAllQuantity,
} from '../../../../redux/basket/basketSlice';
import { setCartOpen } from '../../../../redux/menu/menuSlice';
import { selectProducts } from '../../../../redux/products/productsSelectors';
import { selectIsChangedProductInCart } from '../../../../redux/order/orderSelectors';
import {
  Item,
  GoodWrap,
  Image,
  GoodName,
  QuantityWrap,
  Button,
  Input,
  Price,
  DeleteBtn,
  CapacityWrap,
  Capacity,
  SealingHolders,
  Advert,
} from './CartItem.styled';
import noImage from '../../../../assets/images/no-image-available.webp';
import { ChangeEvent, FC, useEffect } from 'react';
import { selectArrOfProductsWithUpdatedPrice } from '../../../../redux/basket/basketSelectors';
import { theme } from 'styles/theme';

type CartItemProps = {
  item: {
    codeOfGood: string;
    image: string[];
    name: string;
    quantity: number;
    quantityOrdered: number;
    totalPrice: number;
    capacityKey?: string;
    selectedSealing?: boolean;
    selectedHolder?: boolean;
  };
};

type ProductWithUpdatedPrice = {
  codeOfGood: string;
  capacityKey?: string;
  selectedSealing?: boolean;
  selectedHolder?: boolean;
  quantity: number;
};

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const {
    codeOfGood,
    image,
    name,
    quantity,
    quantityOrdered,
    totalPrice,
    capacityKey,
    selectedSealing,
    selectedHolder,
  } = item;

  const dispatch = useTypedDispatch();
  const newProducts = useTypedSelector(selectProducts);
  const isChangedProductInCart = useTypedSelector(selectIsChangedProductInCart);
  const arrOfProductsWithUpdatedPrice = useTypedSelector(
    selectArrOfProductsWithUpdatedPrice
  );

  let productWithUpdatedPrice: ProductWithUpdatedPrice | undefined =
    arrOfProductsWithUpdatedPrice.find(
      (item: ProductWithUpdatedPrice) =>
        item.codeOfGood === codeOfGood &&
        item.capacityKey === capacityKey &&
        item.selectedSealing === selectedSealing &&
        item.selectedHolder === selectedHolder
    );

  let productWithUpdatedQuantity: { quantity: number } | null = null;

  if (isChangedProductInCart) {
    const foundProduct = newProducts.find(
      item => item.codeOfGood === codeOfGood
    );
    if (!foundProduct) {
      productWithUpdatedQuantity = {
        quantity: 0,
      };
    }
    else if (
      foundProduct.quantity !== 0 &&
      foundProduct.quantity < quantityOrdered
    ) {
      productWithUpdatedQuantity = { quantity: foundProduct.quantity };
    }
  }

  useEffect(() => {
    if (productWithUpdatedQuantity) {
      dispatch(
        changeAllQuantity({
          codeOfGood,
          capacityKey,
          selectedSealing,
          selectedHolder,
          quantity: productWithUpdatedQuantity.quantity,
        })
      );
    }
  }, [
    dispatch,
    codeOfGood,
    capacityKey,
    selectedSealing,
    selectedHolder,
    productWithUpdatedQuantity,
  ]);

  const closeCart = () => {
    dispatch(setCartOpen(false));
  };

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > quantity) {
      dispatch(
        changeQuantity({
          ...item,
          codeOfGood,
          quantity,
          capacityKey,
          selectedSealing,
          selectedHolder,
          quantityOrdered: quantity,
        })
      );
    }

    if (Number(e.target.value) <= quantity && Number(e.target.value) >= 0) {
      dispatch(
        changeQuantity({
          ...item,
          codeOfGood,
          quantity,
          capacityKey,
          selectedSealing,
          selectedHolder,
          quantityOrdered: Number(e.target.value) || 1,
        })
      );
    }
  };

  const decrease = () => {
    if (quantityOrdered > 1) {
      dispatch(decreaseQuantity(item));
    }
  };

  const increase = () => {
    if (quantityOrdered < quantity) {
      dispatch(increaseQuantity(item));
    } else {
      toast(`Максимальна кількість в наявності: ${quantity} шт`, {
        style: {
          border: `1px solid ${theme.colors.error}`,
        },
        id: 'clipboard',
      });
    }
  };

  const deleteFromCart = () => {
    dispatch(
      deleteItem({
        totalPrice,
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
      })
    );
  };

  return (
    <>
      <Item>
        <GoodWrap>
          <Image src={image[0] || noImage} alt={name} />
          <GoodName onClick={closeCart} to={`/assortment/${codeOfGood}`}>
            {name}
          </GoodName>
          <QuantityWrap>
            <Button type="button" onClick={decrease}>
              <FaMinus />
            </Button>
            <Input
              type="number"
              onChange={changeValue}
              value={quantityOrdered}
              min={1}
            />
            <Button type="button" onClick={increase}>
              <FaPlus />
            </Button>
          </QuantityWrap>
          <Price>{totalPrice} грн</Price>
          <DeleteBtn type="button" onClick={deleteFromCart}>
            <AiOutlineClose />
          </DeleteBtn>
        </GoodWrap>
        {capacityKey && (
          <CapacityWrap>
            <Capacity>
              <Battery0BarIcon
                sx={{
                  width: {
                    mobile: 14,
                    desktop: 19,
                  },
                  height: {
                    mobile: 14,
                    desktop: 19,
                  },
                }}
              />
              <p>{capacityKey}Ah</p>
            </Capacity>
            {selectedSealing && (
              <SealingHolders>
                <CheckCircleOutlineIcon
                  sx={{
                    color: ' rgb(20, 211, 16)',
                    width: {
                      mobile: 12,
                      desktop: 16,
                    },
                    height: {
                      mobile: 12,
                      desktop: 16,
                    },
                  }}
                />
                <p>Герметизація</p>
              </SealingHolders>
            )}
            {selectedHolder && (
              <SealingHolders>
                <CheckCircleOutlineIcon
                  sx={{
                    color: ' rgb(20, 211, 16)',
                    width: {
                      mobile: 12,
                      desktop: 16,
                    },
                    height: {
                      mobile: 12,
                      desktop: 16,
                    },
                  }}
                />
                <p>Використовувати холдери</p>
              </SealingHolders>
            )}
          </CapacityWrap>
        )}
      </Item>
      {productWithUpdatedQuantity &&
        productWithUpdatedQuantity?.quantity > 0 && (
          <Advert>
            *Цей товар є в наявності у кількості{' '}
            {productWithUpdatedQuantity.quantity} шт.
          </Advert>
        )}
      {productWithUpdatedQuantity?.quantity === 0 && (
        <Advert>*Цього товару немає в наявності.</Advert>
      )}
      {productWithUpdatedPrice && (
        <Advert>*Ціна на цей товар змінилась.</Advert>
      )}
    </>
  );
};
