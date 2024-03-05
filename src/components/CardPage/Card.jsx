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
  Subtitle,
  Input,
  Button,
  CounterBox,
  ButtonBox,
  BasketButton,
  OrderButton,
  Subject,
} from './Card.styled';

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
                <div>
                    <div>
                        <Subtitle>Ємність енергії:</Subtitle>
                        <select name="capacity">
                            <option>Виберіть опцію</option>
                            <option>5 Ah</option>
                            <option>10 Ah</option>
                            <option>15 Ah</option>
                        </select>
                        {/* <Box sx={{ maxWidth: 106, height: 30, margin: '0px' }}>
      <FormControl fullWidth sx={{ m: 1, minWidth: 106 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box> */}
                    </div>
                    <div>
                        <Desc>{information}</Desc>
                    </div>
                </div>
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
                <div>
                    <Subject>Опис</Subject>
                    <Desc>
                        information Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque maiores accusantium eos mollitia esse deserunt sequi deleniti
                        corporis quisquam atque.
                    </Desc>
                </div>
            </Wrapper>
        </>
    );
};