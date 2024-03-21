import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { selectOneProduct, selectOneProductPrice, selectQuantityOrders, selectSelectedHolder, selectSelectedSealing, selectSealingPrice, selectHolderPrice } from '../../redux/products/productsSelectors';
import { setPrice, setQuantityOrders, setSealingPrice, setHolderPrice } from '../../redux/products/oneProductSlice';
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

    const { quantity, capacity, capacityKey, sale } = useSelector(selectOneProduct);
    const oneProductPrice = useSelector(selectOneProductPrice);
    const selectedSealing = useSelector(selectSelectedSealing);
    const selectedHolder = useSelector(selectSelectedHolder);
    const quantityOrders = useSelector(selectQuantityOrders);
    const sealingPrice = useSelector(selectSealingPrice);
    const holderPrice = useSelector(selectHolderPrice);

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

    
    useEffect(() => {

        if (selectedSealing && selectedHolder) {
            dispatch(setPrice(quantityOrders * oneProductPrice + sealingPrice + holderPrice));
            return;
        }

        if (selectedSealing) {
            dispatch(setPrice(quantityOrders * oneProductPrice + sealingPrice));
            return;
        }
        
        if (selectedHolder) {
            dispatch(setPrice(quantityOrders * oneProductPrice + holderPrice));
            return;
        }

    
            dispatch(setPrice(quantityOrders * oneProductPrice));
    
        
    }, [dispatch, selectedSealing, holderPrice, oneProductPrice, selectedHolder, quantityOrders, sealingPrice]);
    

    const plusOne = () => {
        if (quantityOrders < quantity) {
            dispatch(setQuantityOrders(quantityOrders + 1));
            
        } else if (quantityOrders >= quantity) {
            toast.success(`Максимальна кількість в наявності: ${quantity} шт`, {
                id: 'clipboard',
                duration: 4000,
            });
        };
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
                <BasketButton disabled={typeof oneProductPrice === "string"}>
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