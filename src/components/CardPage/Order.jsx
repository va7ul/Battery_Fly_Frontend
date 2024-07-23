import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { addItem } from '../../redux/basket/basketSlice';
import {
  selectOneProduct,
  selectOneProductPrice,
  selectQuantityOrders,
  selectSelectedHolder,
  selectSelectedSealing,
  selectSealingPrice,
  selectHolderPrice,
  selectPriceWithSale,
} from '../../redux/products/productsSelectors';
import { selectItems } from '../../redux/basket/basketSelectors'
import {
  setPrice,
  setQuantityOrders,
  setSealingPrice,
  setHolderPrice,
  setPriceWithSale,
} from '../../redux/products/oneProductSlice';
import { ModalQuickOrder } from 'components/Modals/ModalQuickOrder/ModalQuickOrder';
import { theme } from 'styles/theme';
import {
  OrderBox,
  Input,
  Button,
  CounterBox,
  ButtonBox,
  BasketButton,
  OrderButton,
} from './Card.styled';

export const Order = () => {
    const [isModalQuickOrderOpen, setIsModalQuickOrderOpen] = useState(false);

    const handleOpenQuickOrderModal = () => {
        setIsModalQuickOrderOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const handleCloseQuickOrderModal = () => {
        setIsModalQuickOrderOpen(false);
        document.body.style.overflow = 'unset';
    };

    const dispatch = useDispatch();

    const product = useSelector(selectOneProduct);
    const { name, codeOfGood, price, quantity, capacity, capacityKey, discount, sale } = product;
    const oneProductPrice = useSelector(selectOneProductPrice);
    const selectedSealing = useSelector(selectSelectedSealing);
    const selectedHolder = useSelector(selectSelectedHolder);
    const quantityOrders = useSelector(selectQuantityOrders);
    const sealingPrice = useSelector(selectSealingPrice);
    const holderPrice = useSelector(selectHolderPrice);
    const priceWithSale = useSelector(selectPriceWithSale);
    const quantityItemsInBasket = useSelector(selectItems);

    useEffect(() => {
        dispatch(setSealingPrice(100 * quantityOrders));
    }, [dispatch, quantityOrders]);

    useEffect(() => {
        let holderCost = 0;
        if (capacity) {
            holderCost = capacity[capacityKey]?.holder * 2 || 0;
        }
        dispatch(setHolderPrice(holderCost * quantityOrders));
    }, [dispatch, quantityOrders, capacityKey, capacity]);

    // useEffect(() => {

    //     if (selectedSealing && selectedHolder) {
    //         dispatch(setPrice(quantityOrders * oneProductPrice + sealingPrice + holderPrice));
    //         dispatch(setPriceWithSale(quantityOrders * oneProductPrice * ((100 - discount) / 100) + sealingPrice + holderPrice));
    //         return;
    //     }

    //     if (selectedSealing) {
    //         dispatch(setPrice(quantityOrders * oneProductPrice + sealingPrice));
    //         dispatch(setPriceWithSale(quantityOrders * oneProductPrice * ((100 - discount) / 100) + sealingPrice));
    //         return;
    //     }

    //     if (selectedHolder) {
    //         dispatch(setPrice(quantityOrders * oneProductPrice + holderPrice));
    //         dispatch(setPriceWithSale(quantityOrders * oneProductPrice * ((100 - discount) / 100) + holderPrice));
    //         return;
    //     }

    //     dispatch(setPrice(quantityOrders * oneProductPrice));
    //     if (typeof oneProductPrice === 'string') {
    //         return;
    //     }
    //     dispatch(setPriceWithSale(quantityOrders * oneProductPrice * ((100 - discount) / 100)));

    // }, [dispatch, selectedSealing, holderPrice, oneProductPrice, selectedHolder, quantityOrders, sealingPrice, discount]);

    useEffect(() => {
        if (typeof oneProductPrice === 'string') {
            return;
        }

        let totalPrice = quantityOrders * oneProductPrice;
        let totalPriceWithSale = totalPrice * ((100 - discount) / 100);

        if (selectedSealing) {
            totalPrice += sealingPrice;
            totalPriceWithSale += sealingPrice;
        }

        if (selectedHolder) {
            totalPrice += holderPrice;
            totalPriceWithSale += holderPrice;
        }

        dispatch(setPrice(totalPrice));
        dispatch(setPriceWithSale(totalPriceWithSale));
    }, [
        dispatch,
        selectedSealing,
        selectedHolder,
        quantityOrders,
        oneProductPrice,
        sealingPrice,
        holderPrice,
        discount,
    ]);

    const plusOne = () => {
        if (quantityOrders < quantity) {
            dispatch(setQuantityOrders(quantityOrders + 1));
        } else {
            toast(`Максимальна кількість в наявності: ${quantity} шт`, {
              style: {
                border: `1px solid ${theme.colors.error}`,
              },
              id: 'clipboard',
            });
        }
    };

    const minusOne = () => {
        if (quantityOrders > 1) {
            dispatch(setQuantityOrders(quantityOrders - 1));
        }
    };

    const setValue = e => {

        const value = Number(e.target.value)
        if (value > quantity) {
            dispatch(setQuantityOrders(quantity));
            toast(`Максимальна кількість в наявності: ${quantity} шт`, {
              style: {
                border: `1px solid ${theme.colors.error}`,
              },
              id: 'clipboard',
            });
        }

        if (value <= quantity) {
            dispatch(setQuantityOrders(value || ''));
        }
    };

    const minValue = () => {
        if (quantityOrders === '') {
            dispatch(setQuantityOrders(1));
        }
    };

    const addToBasket = () => {
        const itemInBasket = quantityItemsInBasket.find(item => item.codeOfGood === codeOfGood);

        if (itemInBasket && quantity < itemInBasket.quantityOrdered + quantityOrders) {
            return toast(
              `Цей товар вже є в кошику в кількості ${itemInBasket.quantityOrdered} шт. Максимальна кількість в наявності: ${quantity} шт.`,
              {
                style: {
                  border: `1px solid ${theme.colors.error}`,
                },
                id: 'clipboard',
                duration: 5000,
              }
            );
        }
        
        dispatch(
            addItem({
                ...product,
                price: sale ? priceWithSale / quantityOrders : price / quantityOrders,
                capacityKey: capacityKey || '',
                selectedSealing,
                selectedHolder,
                quantityOrdered: quantityOrders,
                totalPrice: sale ? priceWithSale : price,
            })
        );
        toast.success(`Товар доданий до кошика`, {
          id: 'clipboard',
        });
    };

    return (
        <OrderBox>
            <CounterBox>
                <Button
                    onClick={minusOne}
                    disabled={typeof oneProductPrice === 'string' || quantity < 1}
                >
                    <FaMinus />
                </Button>
                <Input
                    min="1"
                    max={quantity}
                    onBlur={minValue}
                    onChange={setValue}
                    value={quantityOrders}
                    disabled={typeof oneProductPrice === 'string' || quantity < 1}
                ></Input>
                <Button
                    onClick={plusOne}
                    disabled={typeof oneProductPrice === 'string' || quantity < 1}
                >
                    <FaPlus />
                </Button>
            </CounterBox>
            <ButtonBox>
                <BasketButton
                    disabled={typeof oneProductPrice === 'string' || quantity < 1}
                    onClick={addToBasket}
                >В кошик
                </BasketButton>
                <OrderButton
                    onClick={handleOpenQuickOrderModal}
                    disabled={quantity < 1}
                >Швидке замовлення
                </OrderButton>
            </ButtonBox>
            <ModalQuickOrder
                product={{ name, codeOfGood, priceWithSale }}
                isModalQuickOrderOpen={isModalQuickOrderOpen}
                handleCloseQuickOrderModal={handleCloseQuickOrderModal}
            />
        </OrderBox>
    )
};
