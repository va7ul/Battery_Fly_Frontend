import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct, selectOneProductPrice } from '../../redux/products/productsSelectors';
import { setPrice } from '../../redux/products/oneProductSlice';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import {
  OrderBox,
  Input,
  Button,
  CounterBox,
  ButtonBox,
  BasketButton,
  OrderButton, } from "./Card.styled";

export const Order = () => {
    const dispatch = useDispatch();
    const oneProductPrice = useSelector(selectOneProductPrice);
    const [quantityOrdered, setQuantityOrdered] = useState(1);
    const { quantity } = useSelector(selectOneProduct);

    useEffect(() => {
        if (typeof oneProductPrice === "string") {
            return
        }
        dispatch(setPrice(quantityOrdered * oneProductPrice));
    },[quantityOrdered, oneProductPrice])
    
    const plusOne = () => {
        if (quantityOrdered < quantity) {     
            setQuantityOrdered(state => Number(state) + 1);
            
        } else if (quantityOrdered >= quantity) {
            toast.success(`Максимальна кількість в наявності: ${quantity} шт`, {
                id: 'clipboard',
                duration: 4000,
            })
        }
    };

    const minusOne = () => {
        if (quantityOrdered > 1) {
            setQuantityOrdered(state => Number(state) - 1);
        }
    };

    const setValue = e => {
        if (e.target.value > quantity) {
            setQuantityOrdered(Number(quantity))
            toast.success(`Максимальна кількість в наявності: ${quantity} шт`, {
                id: 'clipboard',
                duration: 4000,
            })
        }
        if (e.target.value <= quantity) {
            setQuantityOrdered(Number(e.target.value) || '');
        }
    };
    
    const minValue = () => {
        if (quantityOrdered === '') {
            setQuantityOrdered(1);
        }
    };

    return (
        <OrderBox>
            <CounterBox>
                <Button onClick={minusOne}>
                    <div>
                        <FaMinus />
                    </div>
                </Button>
                <Input
                    type="number"
                    min="1"
                    max={quantity}
                    // placeholder="1 шт"
                    onBlur={minValue}
                    onChange={setValue}
                    value={quantityOrdered}>
                </Input>
                <Button onClick={plusOne}>
                    <div>
                        <FaPlus />
                    </div>
                </Button>
            </CounterBox>
            <ButtonBox>
                <BasketButton>
                    <div>В кошик</div>
                </BasketButton>
                <OrderButton>
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