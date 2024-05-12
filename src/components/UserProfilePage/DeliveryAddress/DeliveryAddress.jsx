import { AddButton, EditButton, Subtitle, Text } from './DeliveryAddress.styled';
import { useState } from 'react';
import { DeliveryAddressForm } from '../DeliveryAddressForm/DeliveryAddressForm';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../../redux/user/userSelectors';
import { LiaPenAltSolid } from 'react-icons/lia';

export const DeliveryAddress = () => {
  const [showForm, setShowForm] = useState(false);

  const delivery = useSelector(selectDelivery);
  
  const text = delivery ? 'Редагувати адресу' : 'Додати адресу';

  const handleShowForm = () => setShowForm(!showForm);

  return (
    <>
      <Subtitle>Адреса доставки</Subtitle>
      {delivery ? (
        <>
          <Text>
            {delivery.city}, {delivery.warehouse}.
          </Text>
          {!showForm && (
            <EditButton type="button" onClick={handleShowForm}>
              <LiaPenAltSolid />
              Редагувати адресу
            </EditButton>
          )}
        </>
      ) : (
        <>
          <Text>У вас ще немає збережених адрес.</Text>
          {!showForm && (
            <AddButton type="button" onClick={handleShowForm}>
              Додати адресу
            </AddButton>
          )}
        </>
      )}
      {showForm && (
        <DeliveryAddressForm text={text} handleShowForm={handleShowForm} />
      )}
    </>
  );
};
