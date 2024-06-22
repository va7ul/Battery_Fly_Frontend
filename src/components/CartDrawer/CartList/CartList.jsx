import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { CartItem } from './CartItem/CartItem';
import { List } from './CartList.styled';
import { selectProducts } from '../../../redux/products/productsSelectors';
import { selectIsChangedProductInCart } from '../../../redux/order/orderSelectors';
import { useEffect, useState } from 'react';
import { changePrice } from '../../../redux/basket/basketSlice';

export const CartList = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectItems);
  const newProducts = useSelector(selectProducts);
  const isChangedProductInCart = useSelector(selectIsChangedProductInCart);

  const [newPrice, setNewPrice] = useState([]);
  let productsWithUpdatedPrice = [];
  let arrOfProductsWithNewPrice = getNewPrice(products).filter(
    item => item !== null
  );

  useEffect(() => {
    if (arrOfProductsWithNewPrice.length > 0) {
      setNewPrice(arrOfProductsWithNewPrice);
      newPrice.forEach(item => dispatch(changePrice(item)));
    }
  }, [dispatch, arrOfProductsWithNewPrice, newPrice]);

  function checkPriceOfProducts () {
    return products.flatMap(product => {
      return newProducts.filter(
        item =>
          item.codeOfGood === product.codeOfGood &&
          // item.capacityKey === capacityKey &&
          // item.selectedSealing === selectedSealing &&
          // item.selectedHolder === selectedHolder &&
          (item.price !== product.price ||
            item.sale !== product.sale ||
            item.discount !== product.discount)
      );
    });
  };

  function getNewPrice (products) {
    if (isChangedProductInCart) {
      productsWithUpdatedPrice = checkPriceOfProducts();
    }
    if (productsWithUpdatedPrice) {
      let updatedPrice = null;
      return productsWithUpdatedPrice.map(updatedProduct => {
        let product = products?.find(
          item => item.codeOfGood === updatedProduct.codeOfGood
          //  &&item.capacityKey === capacityKey &&
          // item.selectedSealing === selectedSealing &&
          // item.selectedHolder === selectedHolder &&
        );
        if (updatedProduct.sale) {
          updatedPrice = Math.round(
            updatedProduct.price -
              (updatedProduct.price * updatedProduct.discount) / 100
          );
          if (updatedPrice === product?.totalPrice / product?.quantityOrdered) {
            return null;
          }
          let obj = {
            codeOfGood: updatedProduct.codeOfGood,
            capacityKey: updatedProduct.capacityKey,
            selectedSealing: updatedProduct.selectedSealing,
            selectedHolder: updatedProduct.selectedHolder,
            quantityOrdered: product.quantityOrdered,
            price: updatedPrice,
          };
          return obj;
        } else if (!updatedProduct.sale) {
          let obj = {
            codeOfGood: updatedProduct.codeOfGood,
            capacityKey: updatedProduct.capacityKey,
            selectedSealing: updatedProduct.selectedSealing,
            selectedHolder: updatedProduct.selectedHolder,
            quantityOrdered: product.quantityOrdered,
            price: updatedProduct.price,
          };
          return obj;
        } else {
          return null;
        }
      });
    }
  };

  return (
    <>
      <List>
        {products.map((item, index) => (
          <CartItem
            key={item.codeOfGood + index}
            item={item}
            newPrice={newPrice}
          />
        ))}
      </List>
    </>
  );
};
