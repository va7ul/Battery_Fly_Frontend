import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useState } from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { Wrapper, Title, Image, TextBox, Text, PriceBox, Price, Like, Desc, Subtitle, Input, Button, CounterBox, ButtonBox, BasketButton, OrderButton, Subject } from "./Card.styled";

export const Card = () => {
//   const [age, setAge] = useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

    return (
        <Wrapper>
            <Title>name</Title>
            <Image src="" alt="name" />
            <TextBox>
                <Text>В наявності</Text>
                <Text>Код товару: 0011</Text>
            </TextBox>
            <PriceBox>
                <Price>18000 грн</Price>
                <Like>Додати до списку бажань</Like>
            </PriceBox>
            <Desc>description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusantium doloremque, labore ullam perspiciatis culpa cum, repellendus laudantium accusamus earum adipisci, deserunt quia possimus. Accusamus officia consequuntur sequi animi, quos repellendus libero ullam natus corrupti iure. Dolorem cupiditate esse, maxime reprehenderit est iure dolores incidunt accusamus id dignissimos, earum aperiam.</Desc>
            <div>
                <div>
                    <Subtitle>Ємність енергії:</Subtitle>
                    <select name="capacity">
                        <option selected>Виберіть опцію</option>
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
                    <Desc>5 Ah description Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non aspernatur architecto deserunt eveniet sint quaerat voluptas saepe facere ipsam, debitis laudantium impedit nihil totam distinctio nesciunt possimus similique, ex illo porro sed reiciendis quae unde fugit. Rerum dolore corporis voluptas, cupiditate aperiam provident incidunt similique eum suscipit labore eius?</Desc>
                </div>
            </div>
            <div>
                <Subtitle>Додаткові послуги:</Subtitle>
                <Desc for='germ'>Герметизація</Desc>
                <input type="checkbox" value="Герметизація" id='germ' />
                <Desc for='holder'>Використовувати холдери</Desc>
                <input type="checkbox" id='holder' />
            </div>
            <CounterBox>
                <Button>
                    <div>
                        <FaMinus />
                    </div>
                </Button>
                <Input type="number" min='1' placeholder="1 шт"></Input>
                <Button>
                    <div>
                        <FaPlus />
                    </div>
                </Button>
            </CounterBox>
            <ButtonBox>
                <BasketButton><div>В кошик</div></BasketButton>
                <OrderButton><div>Швидке замовлення</div></OrderButton>
            </ButtonBox>
            <div>
                <Subject>Опис</Subject>
                <Desc>information Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores accusantium eos mollitia esse deserunt sequi deleniti corporis quisquam atque.
                </Desc>
            </div>
        </Wrapper>
    );
};