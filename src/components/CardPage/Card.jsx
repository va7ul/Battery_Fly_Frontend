import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { yellow } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { getOneProduct } from '../../redux/products/productsOperations';

const StyledFormGroup = styled(FormGroup)({

    '& .MuiTypography-root': {
        fontSize: '10px',
        fontFamily: 'themeMUI.typography.fontFamily'
}
//   '& .MuiPaper-root': {
//     borderRadius: 12,
//     marginTop: '26px',
//     backgroundColor: '#0F0F0F',
//     boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
//     [theme.breakpoints.down('tablet')]: {
//       maxHeight: '100%',
//       height: '100vh',
//       marginTop: '60px',
//       maxWidth: '100vw',
//       boxShadow: 'none',
//       backgroundColor: '#050505',
//       position: 'static',
//     },
//   },
//   '& .MuiList-root': {
//     width: '392px',
//     height: '352px',
//     padding: '20px 0px 40px 24px',
//     position: 'relative',
//     [theme.breakpoints.down('tablet')]: {
//       width: '320px',
//       padding: '0px 0px',
//       margin: '0 auto',
//     },
//   },
});

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
                <div>
                    <Subtitle>Додаткові послуги:</Subtitle>
                    {/* <div> */}
                    <StyledFormGroup sx={{
                        flexDirection: 'row', gap: '30px'
                    }}>
                        <FormControlLabel control={<Checkbox size='sm' sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[800],
                            },
                        }} />} label="Герметизація" />
                        <FormControlLabel control={<Checkbox size='sm' sx={{
                            color: yellow[800],
                            '&.Mui-checked': {
                                color: yellow[800],
                            },
                            // '&.MuiFormControlLabel-label': {
                            //     fontSize: '10px',
                            // }
                        }} />} label="Використовувати холдери" />
                    </StyledFormGroup>
                    {/* <FormControlLabel control={<Checkbox size="sm"
                                sx={{
                                    color: yellow[800],
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Використовувати холдери" /> */}
                 

                    {/* </div> */}
                </div>
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