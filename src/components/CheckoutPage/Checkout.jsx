import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
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
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { EmptyCart } from 'components/CartDrawer/EmptyCart/EmptyCart';
import { ModalAgree } from 'components/Modals/SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/SharedComponent/Text/Text';
import { theme } from 'styles/GlobalStyled';
import { Title, Wrapper, OrderButton } from './Checkout.styled';

export const Checkout = () => {
  const dispatch = useDispatch();
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

  const isLoading = useSelector(selectIsLoading);
  const products = useSelector(selectItems);
  const newProducts = useSelector(selectProducts);
  const isChangedProductInCart = useSelector(selectIsChangedProductInCart);

  const [arrOfProductsWithNewPrice, setArrOfProductsWithNewPrice] = useState(
    []
  );
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const codeOfProductsInBasket = useMemo(
    () => products.map(item => item.codeOfGood),
    [products]
  );

  const productsWithUpdatedPrice = useMemo(() => {
    return products?.flatMap(product => {
      const obj = {
        ...newProducts.filter(item => {
          if (!product?.capacityKey) {
            return (
              item.codeOfGood === product.codeOfGood &&
              (item.price !== product.price ||
                item.sale !== product.sale ||
                item.discount !== product.discount)
            );
          } else {
            return (
              item.codeOfGood === product.codeOfGood &&
              (item.capacity[product.capacityKey].price !==
                product.priceOneProduct ||
                item.sale !== product.sale ||
                item.discount !== product.discount ||
                item.capacity[product.capacityKey].holder !==
                  product.capacity[product.capacityKey].holder)
            );
          }
        }),
      };
      return {
        ...obj[0],
        capacityKey: product.capacityKey,
        selectedSealing: product.selectedSealing,
        selectedHolder: product.selectedHolder,
      };
    });
  }, [products, newProducts]);

  const getNewPrice = useMemo(() => {
    if (productsWithUpdatedPrice) {
      let updatedPrice = null;
      return productsWithUpdatedPrice.map(updatedProduct => {
        let product = products?.find(
          item =>
            item.codeOfGood === updatedProduct.codeOfGood &&
            item.capacityKey === updatedProduct.capacityKey &&
            item.selectedSealing === updatedProduct.selectedSealing &&
            item.selectedHolder === updatedProduct.selectedHolder
        );
        //Without capacityKey
        if (!product?.capacityKey) {
          if (updatedProduct.sale) {
            updatedPrice = Math.round(
              updatedProduct.price -
                (updatedProduct.price * updatedProduct.discount) / 100
            );
            if (
              updatedPrice ===
              product?.totalPrice / product?.quantityOrdered
            ) {
              return null;
            }
            let obj = {
              codeOfGood: updatedProduct.codeOfGood,
              capacityKey: '',
              selectedSealing: false,
              selectedHolder: false,
              quantityOrdered: product.quantityOrdered,
              price: updatedPrice,
            };
            return obj;
          } else if (!updatedProduct.sale) {
            if (updatedProduct.price === product?.price) {
              return null;
            }
            let obj = {
              codeOfGood: updatedProduct.codeOfGood,
              capacityKey: '',
              selectedSealing: false,
              selectedHolder: false,
              quantityOrdered: product.quantityOrdered,
              price: updatedProduct.price,
            };
            return obj;
          } else {
            return null;
          }
        } //With capacityKey
        else {
          //With updatedProduct.sale and without selectedHolder
          if (updatedProduct.sale && !product.selectedHolder) {
            updatedPrice = Math.round(
              updatedProduct.capacity[product.capacityKey].price -
                (updatedProduct.capacity[product.capacityKey].price *
                  updatedProduct.discount) /
                  100
            );
            if (
              updatedPrice ===
              product?.totalPrice / product?.quantityOrdered
            ) {
              return null;
            }
            let obj = {
              codeOfGood: updatedProduct.codeOfGood,
              capacityKey: product.capacityKey,
              selectedSealing: product.selectedSealing,
              selectedHolder: product.selectedHolder,
              quantityOrdered: product.quantityOrdered,
              price: updatedPrice,
            };
            return obj;
          } //With updatedProduct.sale and  With selectedHolder
          else if (updatedProduct.sale && product.selectedHolder) {
            updatedPrice = Math.round(
              updatedProduct.capacity[product.capacityKey].price -
                (updatedProduct.capacity[product.capacityKey].price *
                  updatedProduct.discount) /
                  100 +
                updatedProduct.capacity[product.capacityKey].holder * 2
            );
            // With product.selectedSealing
            if (product.selectedSealing) {
              if (
                updatedPrice + 100 ===
                product?.totalPrice / product?.quantityOrdered
              ) {
                return null;
              }
              let obj = {
                codeOfGood: updatedProduct.codeOfGood,
                capacityKey: product.capacityKey,
                selectedSealing: product.selectedSealing,
                selectedHolder: product.selectedHolder,
                quantityOrdered: product.quantityOrdered,
                price: updatedPrice + 100,
              };
              return obj;
            }
            // Without product.selectedSealing
            else {
              if (
                updatedPrice ===
                product?.totalPrice / product?.quantityOrdered
              ) {
                return null;
              }
              let obj = {
                codeOfGood: updatedProduct.codeOfGood,
                capacityKey: product.capacityKey,
                selectedSealing: product.selectedSealing,
                selectedHolder: product.selectedHolder,
                quantityOrdered: product.quantityOrdered,
                price: updatedPrice,
              };
              return obj;
            }
          } //without updatedProduct.sale and without selectedHolder
          else if (!updatedProduct.sale && !product.selectedHolder) {
            if (
              updatedProduct.capacity[product.capacityKey].price ===
              product?.priceOneProduct
            ) {
              return null;
            }
            let obj = {
              codeOfGood: updatedProduct.codeOfGood,
              capacityKey: product.capacityKey,
              selectedSealing: product.selectedSealing,
              selectedHolder: product.selectedHolder,
              quantityOrdered: product.quantityOrdered,
              price: updatedProduct.capacity[product.capacityKey].price,
            };
            return obj;
          } //without updatedProduct.sale and With selectedHolder
          else if (!updatedProduct.sale && product.selectedHolder) {
            // With product.selectedSealing
            if (product.selectedSealing) {
              if (
                updatedProduct.capacity[product.capacityKey].price +
                  updatedProduct.capacity[product.capacityKey].holder * 2 +
                  100 ===
                product?.totalPrice
              ) {
                return null;
              }
              let obj = {
                codeOfGood: updatedProduct.codeOfGood,
                capacityKey: product.capacityKey,
                selectedSealing: product.selectedSealing,
                selectedHolder: product.selectedHolder,
                quantityOrdered: product.quantityOrdered,
                price:
                  updatedProduct.capacity[product.capacityKey].price +
                  updatedProduct.capacity[product.capacityKey].holder * 2 +
                  100,
              };
              return obj;
            }
            //Without product.selectedSealing
            else {
              if (
                updatedProduct.capacity[product.capacityKey].price +
                  updatedProduct.capacity[product.capacityKey].holder * 2 ===
                product?.totalPrice
              ) {
                return null;
              }
              let obj = {
                codeOfGood: updatedProduct.codeOfGood,
                capacityKey: product.capacityKey,
                selectedSealing: product.selectedSealing,
                selectedHolder: product.selectedHolder,
                quantityOrdered: product.quantityOrdered,
                price:
                  updatedProduct.capacity[product.capacityKey].price +
                  updatedProduct.capacity[product.capacityKey].holder * 2,
              };
              return obj;
            }
          } else {
            return null;
          }
        }
      });
    }
  }, [products, productsWithUpdatedPrice]);

  const isValidPhone = isPhoneValid(tel);

  let isChangedProducts = null;

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
    if (isChangedProductInCart) {
      if (arrOfProductsWithNewPrice?.length > 0) {
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
    onSubmit: (values, _) => {
      const userData = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        tel: tel,
        email: values.email,
        text: values.text,
      };
      const orderData = {
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
          duration: 5000,
          style: {
            borderRadius: '10px',
            background: `${theme.colors.textPrimary}`,
            color: `${theme.colors.secondary}`,
          },
        });
      } else if (!isValidPhone || tel === '+380' || !city || !payment) {
        toast('Введіть номер телефону, спосіб доставки і спосіб оплати.', {
          id: 'warning',
          icon: '👀',
          duration: 5000,
          style: {
            borderRadius: '10px',
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
                <PersonalData formik={formik} isValidPhone={isValidPhone} />
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
