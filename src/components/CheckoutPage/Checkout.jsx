import { Grid } from '@mui/material';
import { PersonalData } from './PersonalData/PersonalData';
import { Cart } from './Cart/Cart';
import { Delivery } from './Delivery/Delivery';
import { Title, Wrapper } from './Checkout.styled';
import { OrderButton } from './Delivery/Delivery.styled';

export const Checkout = () => {
    return (
        <Wrapper>
            <Title>Оформлення замовлення</Title>
            <Grid container>
                <Grid item desktop={6}>
                    <PersonalData />
                </Grid>
                <Grid item desktop={6}>
                    <Cart />
                </Grid>
                <Grid item desktop={6}>
                    <Delivery />
                    <OrderButton>
                        <div>Оформити замовлення</div>
                    </OrderButton>
                </Grid>
            </Grid>
        </Wrapper>
    );
};
