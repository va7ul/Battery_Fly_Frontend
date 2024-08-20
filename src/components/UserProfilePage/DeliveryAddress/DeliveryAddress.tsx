import { FC, useState } from 'react';
import { useTypedSelector } from '../../../redux/hooks/hooks';
import { LiaPenAltSolid } from 'react-icons/lia';
import { selectDelivery } from '../../../redux/user/userSelectors';
import { DeliveryAddressForm } from '../DeliveryAddressForm/DeliveryAddressForm';
import { AddButton, EditButton, Subtitle, Text } from './DeliveryAddress.styled';
import { Delivery } from '../../../@types/user.types';


export const DeliveryAddress: FC = () => {
  const [showForm, setShowForm] = useState(false);

  const delivery = useTypedSelector(selectDelivery);

  const handleShowForm = () => setShowForm(showForm => !showForm);

  const isObjectEmpty = (obj: Delivery): boolean => {
    if (obj.city === '' && obj.warehouse === '') {
      return false;
    }
    return true;
  };

const text: string = isObjectEmpty(delivery)
  ? 'Редагувати адресу'
  : 'Додати адресу';
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
