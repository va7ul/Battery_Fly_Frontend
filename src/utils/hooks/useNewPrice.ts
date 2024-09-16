import { useMemo } from 'react';
import { useTypedSelector } from '../../redux/hooks/hooks';
import { selectItems } from '../../redux/basket/basketSelectors';
import { selectProducts } from '../../redux/products/productsSelectors';
import { ProductWithNewPrice } from '../../@types/order.types';

export const useNewPrice = () => {
  const products = useTypedSelector(selectItems);
  const newProducts = useTypedSelector(selectProducts);

  const productsWithUpdatedPrice = useMemo(() => {
    return products?.flatMap(product => {
      const obj = {
        ...newProducts.filter(item => {
          if (!product?.capacityKey) {
            return (
              item.codeOfGood === product.codeOfGood &&
              (Number(item.price) !== Number(product.price) ||
                item.sale !== product.sale ||
                item.discount !== product.discount)
            );
          } else {
            const itemCapacity = item.capacity?.[product.capacityKey];
            const productCapacity = product.capacity?.[product.capacityKey];
            return (
              item.codeOfGood === product.codeOfGood &&
              (itemCapacity?.price !== product.priceOneProduct ||
                item.sale !== product.sale ||
                item.discount !== product.discount ||
                itemCapacity?.holder !== productCapacity?.holder)
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
      let updatedPrice: number | null = null;
      return productsWithUpdatedPrice.map(updatedProduct => {
        let product = products?.find(
          item =>
            item.codeOfGood === updatedProduct.codeOfGood &&
            item.capacityKey === updatedProduct.capacityKey &&
            item.selectedSealing === updatedProduct.selectedSealing &&
            item.selectedHolder === updatedProduct.selectedHolder
        );

        if (
          !product ||
          typeof product.totalPrice === 'undefined' ||
          typeof product.quantityOrdered === 'undefined'
        ) {
          return null;
        }
        const price =
          typeof updatedProduct.price === 'string'
            ? Number(updatedProduct.price)
            : updatedProduct.price;

        //Without capacityKey
        if (!product?.capacityKey) {
          if (updatedProduct.sale) {
            updatedPrice = Math.round(
              price - (price * updatedProduct.discount) / 100
            );
            if (updatedPrice === product.totalPrice / product.quantityOrdered) {
              return null;
            }
            let obj: ProductWithNewPrice = {
              codeOfGood: updatedProduct.codeOfGood,
              capacityKey: '',
              selectedSealing: false,
              selectedHolder: false,
              quantityOrdered: product?.quantityOrdered,
              price: updatedPrice,
            };
            return obj;
          } else if (!updatedProduct.sale) {
            if (updatedProduct.price === product?.price) {
              return null;
            }
            let obj: ProductWithNewPrice = {
              codeOfGood: updatedProduct.codeOfGood,
              capacityKey: '',
              selectedSealing: false,
              selectedHolder: false,
              quantityOrdered: product?.quantityOrdered,
              price: Number(updatedProduct.price),
            };
            return obj;
          } else {
            return null;
          }
        } //With capacityKey
        else {
          //With updatedProduct.sale and without selectedHolder
          const capacity = updatedProduct.capacity?.[product.capacityKey];
          if (!capacity) return null;
          const holderPrice = capacity.holder ? capacity.holder * 2 : 0;

          if (updatedProduct.sale && !product.selectedHolder) {
            updatedPrice = Math.round(
              capacity.price - (capacity.price * updatedProduct.discount) / 100
            );
            if (
              updatedPrice ===
              product?.totalPrice / product?.quantityOrdered
            ) {
              return null;
            }
            let obj: ProductWithNewPrice = {
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
              capacity.price -
                (capacity.price * updatedProduct.discount) / 100 +
                holderPrice
            );
            // With product.selectedSealing
            if (product.selectedSealing) {
              if (
                updatedPrice + 100 ===
                product?.totalPrice / product?.quantityOrdered
              ) {
                return null;
              }
              let obj: ProductWithNewPrice = {
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
              let obj: ProductWithNewPrice = {
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
            if (capacity.price === product?.priceOneProduct) {
              return null;
            }
            let obj: ProductWithNewPrice = {
              codeOfGood: updatedProduct.codeOfGood,
              capacityKey: product.capacityKey,
              selectedSealing: product.selectedSealing,
              selectedHolder: product.selectedHolder,
              quantityOrdered: product.quantityOrdered,
              price: capacity.price,
            };
            return obj;
          } //without updatedProduct.sale and With selectedHolder
          else if (!updatedProduct.sale && product.selectedHolder) {
            // With product.selectedSealing
            if (product.selectedSealing) {
              if (capacity.price + holderPrice + 100 === product?.totalPrice) {
                return null;
              }
              let obj: ProductWithNewPrice = {
                codeOfGood: updatedProduct.codeOfGood,
                capacityKey: product.capacityKey,
                selectedSealing: product.selectedSealing,
                selectedHolder: product.selectedHolder,
                quantityOrdered: product.quantityOrdered,
                price: capacity.price + holderPrice + 100,
              };
              return obj;
            }
            //Without product.selectedSealing
            else {
              if (capacity.price + holderPrice === product?.totalPrice) {
                return null;
              }
              let obj: ProductWithNewPrice = {
                codeOfGood: updatedProduct.codeOfGood,
                capacityKey: product.capacityKey,
                selectedSealing: product.selectedSealing,
                selectedHolder: product.selectedHolder,
                quantityOrdered: product.quantityOrdered,
                price: capacity.price + holderPrice,
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

  return getNewPrice;
};
