import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LiaPenAltSolid } from 'react-icons/lia';
import { selectDelivery } from '../../../redux/user/userSelectors';
import { DeliveryAddressForm } from '../DeliveryAddressForm/DeliveryAddressForm';
import { AddButton, EditButton, Subtitle, Text } from './DeliveryAddress.styled';

export const DeliveryAddress = () => {
  const [showForm, setShowForm] = useState(false);

  const delivery = useSelector(selectDelivery);

  const handleShowForm = () => setShowForm(showForm => !showForm);

  const isObjectEmpty = (obj) => {
    if (obj.city === '' && obj.warehouse === '') {
      return true;
    }
      return false;
  } 

const text = isObjectEmpty(delivery) ? 'Додати адресу' : 'Редагувати адресу';
  return (
    <>
      <Subtitle>Адреса доставки</Subtitle>
      {isObjectEmpty(delivery) ? (
        <>
          <Text>
            м. {delivery.city}, Нова пошта: {delivery.warehouse}.
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
            <AddButton
              type="button"
              onClick={handleShowForm}
            >
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
