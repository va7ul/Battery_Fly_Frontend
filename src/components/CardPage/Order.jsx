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
    return (
        <OrderBox>
            <CounterBox>
                <Button>
                    <div>
                        <FaMinus />
                    </div>
                </Button>
                <Input type="number" min="1" placeholder="1 шт"></Input>
                <Button>
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
        </OrderBox>
    );
};