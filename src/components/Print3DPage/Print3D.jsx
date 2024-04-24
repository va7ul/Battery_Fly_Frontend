// import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ProductPhoto } from 'components/Shared/ProductPhoto/ProductPhoto';
import { Modal3DPrint } from 'components/Modals/Modal3DPrint/Modal3DPrint';
import {
  Wrapper,
  MobCase,
  Box,
  Case,
  Title,
  OrderButton,
  FileWrapper,
  UploadButton,
} from './Print3D.styled';
import { ProductInformation } from 'components/Shared/ProductInformation/ProductInformation';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { PriceList } from './PriceList/PriceList';

export const Print3D = () => {
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });
  //   const { name, capacity, information } = useSelector(select3DPrint);
  const [isModal3DPrintOpen, setIsModal3DPrintOpen] = useState(false);

  const handleOpen3DPrintModal = () => {
    setIsModal3DPrintOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleClose3DPrintModal = () => {
    setIsModal3DPrintOpen(false);
    document.body.style.overflow = 'unset';
  };

  const data = {
    name: '3D-Друк',
    image: [
      'https://res.cloudinary.com/dge7alacy/image/upload/v1711049096/FPV%206s2p%201.jpg',
      'https://res.cloudinary.com/dge7alacy/image/upload/v1711049096/FPV%206s2p%202.jpg',
      'https://res.cloudinary.com/dge7alacy/image/upload/v1711049096/FPV%206s1p%201.jpg',
      'https://res.cloudinary.com/dge7alacy/image/upload/v1711049096/FPV%206s1p%202.jpg',
    ],
    description:
      'Хімія та тип акумулятора: Samsung INR21700;Номінальна напруга: 22.2 V;Максимальна напруга (заряд 100%): 25.2 V;Мінімальна напруга (заряд 5%) відключення розряду: 15 V;Метод заряджання CC/CV;Температурний діапазон при зарядці 0 – 50°С;Діапазон робочої температури -10+80°C;Силовий роз’єм: XT60 (мама);Балансувальний роз’єм: JST-XH (мама);Силовий дріт: 12AWG;Довжина дроту: 70мм;Країна виробник: Україна',
    information:
      'Акумуляторна збірка (батарея) для FPV коптерів / дронів на базі високострумових, високоякісних елементів 21700 Samsung INR21700-40T 4000mAh 45A або Moliсell INR-21700-P42A 4200mAh 45A. Батарея спроектована для застосування на FPV коптерах для виконання польотів збільшеної дальності та тривалості. Завдяки більшій ємності, нижчому внутрішньому опору та нижчій температурі акумулятора ця батарея забезпечить більші час польоту та ефективність,  в порівнянні із іншими однокласними та співрозмірними батареями.',
  };

  const { name, image, description, information } = data;

  return (
    <Wrapper>
      {!desktopVersion ? (
        <MobCase>
          <Title>{name}</Title>
          <ProductPhoto name={name} image={image} />
          <Description description={description} />
          <Options />
          <FileWrapper>
            <UploadButton>Вибрати файл</UploadButton>
            <div>Файл не вибрано</div>
          </FileWrapper>
          <OrderButton onClick={handleOpen3DPrintModal}>
            Замовити друк
          </OrderButton>
        </MobCase>
      ) : (
        <Case>
          <ProductPhoto name={name} image={image} />
          <Box>
            <Title>{name}</Title>
            <Description description={description} />
            <Options />
            <FileWrapper>
              <UploadButton>Вибрати файл</UploadButton>
              <div>Файл не вибрано</div>
            </FileWrapper>
            <OrderButton onClick={handleOpen3DPrintModal}>
              Замовити друк
            </OrderButton>
          </Box>
        </Case>
      )}
      {information && <ProductInformation information={information} />}
      <PriceList />
      <Modal3DPrint
        isModal3DPrintOpen={isModal3DPrintOpen}
        handleClose3DPrintModal={handleClose3DPrintModal}
      />
    </Wrapper>
  );
};
