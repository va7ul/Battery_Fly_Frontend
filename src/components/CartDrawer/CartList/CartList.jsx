import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { CartItem } from './CartItem/CartItem';
import { List } from './CartList.styled';
import { selectProducts } from '../../../redux/products/productsSelectors';
import { selectIsChangedProductInCart } from '../../../redux/order/orderSelectors';
import { useEffect, useMemo, useState } from 'react';
import {
  addProductWithUpdatedPrice,
  changePrice,
} from '../../../redux/basket/basketSlice';

export const CartList = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectItems);
  const newProducts = useSelector(selectProducts);
  const isChangedProductInCart = useSelector(selectIsChangedProductInCart);
  const [arrOfProductsWithNewPrice, setArrOfProductsWithNewPrice] = useState(
    []
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

  console.log('productsWithUpdatedPrice', productsWithUpdatedPrice);

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
            dispatch(addProductWithUpdatedPrice(obj));
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
            dispatch(addProductWithUpdatedPrice(obj));
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
            dispatch(addProductWithUpdatedPrice(obj));
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
              dispatch(addProductWithUpdatedPrice(obj));
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
              dispatch(addProductWithUpdatedPrice(obj));
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
            dispatch(addProductWithUpdatedPrice(obj));
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
              dispatch(addProductWithUpdatedPrice(obj));
              return obj;
            }
            //Without product.selectedSealing
            else {
              if (
                updatedProduct.capacity[product.capacityKey].price +
                  updatedProduct.capacity[product.capacityKey].holder*2 ===
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
                  updatedProduct.capacity[product.capacityKey].holder*2,
              };
              dispatch(addProductWithUpdatedPrice(obj));
              return obj;
            }
          } else {
            return null;
          }
        }
      });
    }
  }, [dispatch, products, productsWithUpdatedPrice]);

  useEffect(() => {
    if (isChangedProductInCart) {
      setArrOfProductsWithNewPrice(getNewPrice?.filter(item => item !== null));
    }
  }, [isChangedProductInCart, getNewPrice]);
  // console.log('arrOfProductsWithNewPrice', arrOfProductsWithNewPrice);

  useEffect(() => {
    if (isChangedProductInCart) {
      if (arrOfProductsWithNewPrice?.length > 0) {
        arrOfProductsWithNewPrice.forEach(item => dispatch(changePrice(item)));
      }
    }
  }, [dispatch, isChangedProductInCart, arrOfProductsWithNewPrice]);

  return (
    <>
      <List>
        {products.map((item, index) => (
          <CartItem key={item.codeOfGood + index} item={item} />
        ))}
      </List>
    </>
  );
};
