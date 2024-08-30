import { useMemo } from 'react';
import { useTypedSelector } from '../../redux/hooks/hooks';
import { selectItems } from '../../redux/basket/basketSelectors';
import { selectProducts } from '../../redux/products/productsSelectors';


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

  return getNewPrice;
};
