import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { addItem } from '../../redux/basket/basketSlice'
import { selectOneProduct, selectOneProductPrice, selectQuantityOrders, selectSelectedHolder, selectSelectedSealing, selectSealingPrice, selectHolderPrice, selectPriceWithSale } from '../../redux/products/productsSelectors';
import { setPrice, setQuantityOrders, setSealingPrice, setHolderPrice, setPriceWithSale } from '../../redux/products/oneProductSlice';
import {
  OrderBox,
  Input,
  Button,
  CounterBox,
  ButtonBox,
  BasketButton,
  OrderButton } from "./Card.styled";

export const Order = () => {
    const dispatch = useDispatch();

    const product = useSelector(selectOneProduct);
    const {
      price,
      quantity,
      capacity,
      capacityKey,
      discount,
      sale,
    } = product;
    const oneProductPrice = useSelector(selectOneProductPrice);
    const selectedSealing = useSelector(selectSelectedSealing);
    const selectedHolder = useSelector(selectSelectedHolder);
    const quantityOrders = useSelector(selectQuantityOrders);
    const sealingPrice = useSelector(selectSealingPrice);
    const holderPrice = useSelector(selectHolderPrice);
    const priceWithSale = useSelector(selectPriceWithSale);

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
    }, [dispatch, selectedSealing, selectedHolder, quantityOrders, oneProductPrice, sealingPrice, holderPrice, discount]);


    const plusOne = () => {
        if (quantityOrders < quantity) {
            dispatch(setQuantityOrders(quantityOrders + 1));
        } else {
            toast.success(`Максимальна кількість в наявності: ${quantity} шт`, {
                id: 'clipboard',
                duration: 4000,
            });
        }
    };


    const minusOne = () => {
        if (quantityOrders > 1) {
            dispatch(setQuantityOrders(quantityOrders - 1));
        };
    };

    const setValue = e => {
        if (e.target.value > quantity) {
            dispatch(setQuantityOrders(quantity))
            toast.success(`Максимальна кількість в наявності: ${quantity} шт`, {
                id: 'clipboard',
                duration: 4000,
            });
        };

        if (e.target.value <= quantity) {
            dispatch(setQuantityOrders(Number(e.target.value) || ''));
        };
    };
    
    const minValue = () => {
        if (quantityOrders === '') {
            dispatch(setQuantityOrders(1));
        };
    };

    const addToBasket = () => {
        dispatch(
            addItem({
                ...product,
                capacityKey: capacityKey || '',
                selectedSealing,
                selectedHolder,
                quantityOrdered: quantityOrders,
                totalPrice: sale ? priceWithSale : price,
            })
        
        );
        toast.success(`Товар доданий до кошика`, {
                id: 'clipboard',
                duration: 4000,
            })
  };

    return (
        <OrderBox>
            <CounterBox>
                <Button
                    onClick={minusOne}
                    disabled={typeof oneProductPrice === "string"}>
                    <div>
                        <FaMinus />
                    </div>
                </Button>
                <Input
                    type="number"
                    min="1"
                    max={quantity}
                    onBlur={minValue}
                    onChange={setValue}
                    value={quantityOrders}
                    disabled={typeof oneProductPrice === "string"}
                >
                </Input>
                <Button
                    onClick={plusOne}
                    disabled={typeof oneProductPrice === "string"}>
                    <div>
                        <FaPlus />
                    </div>
                </Button>
            </CounterBox>
            <ButtonBox>
                <BasketButton
                    disabled={typeof oneProductPrice === "string"}
                onClick={addToBasket}
                >
                    <div>В кошик</div>
                </BasketButton>
                <OrderButton disabled={typeof oneProductPrice === "string"}>
                    <div>Швидке замовлення</div>
                </OrderButton>
            </ButtonBox>
            <div><Toaster
                position="top-center"
                reverseOrder={false}
            /></div>

        </OrderBox>
    );
};