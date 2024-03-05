import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { getOneProduct } from '../../redux/products/productsOperations';
import { CheckBox } from './Checkbox';
// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import {
  Wrapper,
  Title,
  Image,
  TextBox,
  Text,
  PriceBox,
  Price,
  Like,
  Desc,
  Input,
  Button,
  CounterBox,
  ButtonBox,
  BasketButton,
  OrderButton,
} from './Card.styled';
import { Capacity } from './Capacity';
import { Information } from './Information';

export const Card = () => {
    //   const [age, setAge] = useState('');

    //   const handleChange = (event) => {
    //     setAge(event.target.value);
    //   };

    const dispatch = useDispatch();
    
    const { name, codeOfGood, description, image, price, quantity, information } = useSelector(selectOneProduct);

    useEffect(() => {
        dispatch(getOneProduct('0099'));
    }, [dispatch]);

    return (
        <>
            <Wrapper>
                <Title>{name}</Title>
                <Image src={image} alt={name} />
                <TextBox>
                    {quantity > 0 ? (
                        <Text>В наявності</Text>
                    ) : (
                        <Text>Немає в наявності</Text>
                    )}
                    <Text>Код товару: {codeOfGood}</Text>
                </TextBox>
                <PriceBox>
                    <Price>{price} грн</Price>
                    <Like>Додати до списку бажань</Like>
                </PriceBox>
                <Desc>{description}</Desc>

                <Capacity />
                <CheckBox />
                
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

                {information ? (<Information props={information} /> ) : (undefined)}
             
            </Wrapper>
        </>
    );
};