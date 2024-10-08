import { useEffect, useMemo, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useAuth, useOrder } from 'utils/hooks';
import { PersonalData } from './PersonalData/PersonalData';
import { Delivery } from './Delivery/Delivery';
import { Cart } from './Cart/Cart';
import { TotalPrice } from './TotalPrice/TotalPrice';
import { personalDataSchema } from 'common/schemas/personalDataSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import {
  selectIsChangedProductInCart,
  selectIsLoading,
} from '../../redux/order/orderSelectors';
import { addOrder } from '../../redux/order/orderOperations';
import {
  changeOrderNum,
  changeUserComment,
  checkChangeProductInCart,
} from '../../redux/order/orderSlice';
import { selectItems } from '../../redux/basket/basketSelectors';
import {
  addProductWithUpdatedPrice,
  changePrice,
  clearArrOfProductsWithUpdatedPrice,
  clearBasket,
} from '../../redux/basket/basketSlice';
import { selectProducts } from '../../redux/products/productsSelectors';
import { getProducts } from '../../redux/products/productsOperations';
import { useNewPrice } from 'utils/hooks/useNewPrice';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { EmptyCart } from 'components/CartDrawer/EmptyCart/EmptyCart';
import { ModalAgree } from 'components/Modals/SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/SharedComponent/Text/Text';
import { theme } from 'styles/theme';
import { Title, Wrapper, OrderButton } from './Checkout.styled';
import { UserData } from '../../@types/user.types';
import { orderData, ProductWithNewPrice } from '../../@types/order.types';

type FormValues = Omit<UserData, 'tel' | 'patronymic'> & { text: string };

export const Checkout = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const {
    isLoggedIn,
    userData: { firstName, lastName, email },
  } = useAuth();

  const {
    text,
    tel,
    orderNum,
    total,
    promoCode,
    promoCodeDiscount,
    discountValue,
    together,
    cartItems,
    city,
    warehouse,
    payment,
    deliveryType,
  } = useOrder();

  const getNewPrice = useNewPrice();

  const isLoading = useTypedSelector(selectIsLoading);
  const products = useTypedSelector(selectItems);
  const newProducts = useTypedSelector(selectProducts);
  const isChangedProductInCart = useTypedSelector(selectIsChangedProductInCart);

  const [arrOfProductsWithNewPrice, setArrOfProductsWithNewPrice] = useState<
    (ProductWithNewPrice | null)[] | undefined
  >([]);
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const codeOfProductsInBasket = useMemo(
    () => products.map(item => item.codeOfGood),
    [products]
  );

  const isValidPhone = isPhoneValid(tel);

  let isChangedProducts: boolean | null = null;

  useEffect(() => {
    dispatch(checkChangeProductInCart(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearArrOfProductsWithUpdatedPrice([]));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts(codeOfProductsInBasket));
  }, [dispatch, codeOfProductsInBasket]);

  useEffect(() => {
    if (isChangedProductInCart) {
      setArrOfProductsWithNewPrice(getNewPrice?.filter(item => item !== null));
    }
  }, [isChangedProductInCart, getNewPrice]);

  useEffect(() => {
    if (isChangedProductInCart && arrOfProductsWithNewPrice) {
      if (arrOfProductsWithNewPrice.length > 0) {
        arrOfProductsWithNewPrice.forEach(item => dispatch(changePrice(item)));
        arrOfProductsWithNewPrice.forEach(item =>
          dispatch(addProductWithUpdatedPrice(item))
        );
      }
    }
  }, [dispatch, isChangedProductInCart, arrOfProductsWithNewPrice]);

  useEffect(() => {
    if (orderNum) {
      handleOpenAgreeModal();
    }
  }, [orderNum]);

  const checkChangedProducts = () => {
    return products.some(product => {
      return newProducts.some(
        oneOfProduct =>
          oneOfProduct.codeOfGood === product.codeOfGood &&
          oneOfProduct.quantity < product.quantityOrdered
      );
    });
  };

  const handleEmptyBasket = () => {
    navigate('/assortment');
  };

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    dispatch(changeOrderNum(''));
    document.body.style.overflow = 'unset';
    navigate('/main');
  };

  const formik = useFormik({
    initialValues: {
      firstName: isLoggedIn ? firstName : '',
      lastName: isLoggedIn ? lastName : '',
      email: isLoggedIn ? email : '',
      text: text,
    },
    validationSchema: personalDataSchema,
    onSubmit: (values: FormValues) => {
      const userData: FormValues & { tel: string } = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        tel: tel,
        email: values.email.toLowerCase().trim(),
        text: values.text,
      };
      const orderData: orderData = {
        userData: userData,
        total,
        promoCode,
        promoCodeDiscount,
        discountValue,
        together,
        cartItems,
        deliveryType,
        city,
        warehouse,
        payment,
      };
      dispatch(changeUserComment(orderData.userData.text));
      isChangedProducts = checkChangedProducts();
      if (isChangedProducts || products.length !== newProducts.length) {
        toast(`Перевірте, будь ласка, кількість товарів у кошику.`, {
          id: 'warning',
          icon: '👀',
          style: {
            background: `${theme.colors.textPrimary}`,
            color: `${theme.colors.secondary}`,
          },
        });
      } else if (!isValidPhone || tel === '+380') {
        toast('Введіть номер телефону', {
          id: 'warning',
          icon: '👀',
          style: {
            background: `${theme.colors.textPrimary}`,
            color: `${theme.colors.secondary}`,
          },
        });
      } else if (!city) {
        toast('Введіть спосіб доставки', {
          id: 'warning',
          icon: '👀',
          style: {
            background: `${theme.colors.textPrimary}`,
            color: `${theme.colors.secondary}`,
          },
        });
      } else if (!payment) {
        toast('Введіть спосіб оплати', {
          id: 'warning',
          icon: '👀',
          style: {
            background: `${theme.colors.textPrimary}`,
            color: `${theme.colors.secondary}`,
          },
        });
      } else {
        dispatch(addOrder(orderData)).then(result => {
          if (result.meta.requestStatus === 'fulfilled') {
            dispatch(clearBasket());
          }
        });
      }
    },
  });

  return (
    <>
      {isLoading && <CustomLoader />}
      {products.length < 1 && !orderNum ? (
        <EmptyCart closeCart={handleEmptyBasket} isOrder={true} />
      ) : (
        <>
          <Wrapper>
            <Title>Оформлення замовлення</Title>
            <Grid container rowGap="15px">
              <Grid item desktop={6}>
                <FormikProvider value={formik}>
                  <PersonalData formik={formik} isValidPhone={isValidPhone} />
                </FormikProvider>
                <Delivery />
              </Grid>
              <Grid item desktop={6}>
                <Cart />
                <TotalPrice />
              </Grid>
            </Grid>
            <OrderButton type="submit" form="form-order">
              Оформити замовлення
            </OrderButton>
          </Wrapper>
          <ModalAgree
            isModalAgreeOpen={isModalAgreeOpen}
            handleCloseAgreeModal={handleCloseAgreeModal}
            buttonText="На головну сторінку"
          >
            <TextAgree>Ваш номер замовлення {orderNum}.</TextAgree>
            <TextAgree>Очікуйте на дзвінок від менеджера.</TextAgree>
          </ModalAgree>
        </>
      )}
    </>
  );
};
