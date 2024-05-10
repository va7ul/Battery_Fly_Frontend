import { useMediaQuery } from 'react-responsive';
import { AddButton, Subtitle, Text } from './DeliveryAddress.styled';
import { useState } from 'react';
import { DeliveryAddressForm } from '../DeliveryAddressForm/DeliveryAddressForm';

export const DeliveryAddress = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width:1280px)' });
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(!showForm);
  return (
    <>
      <Subtitle>Адреса доставки</Subtitle>
      <Text>У вас ще немає збережених адрес.</Text>
      {!showForm && (
        <AddButton type="button" onClick={handleShowForm}>
          Додати адресу
        </AddButton>
      )}
      {showForm && <DeliveryAddressForm />}
    </>
  );
};
