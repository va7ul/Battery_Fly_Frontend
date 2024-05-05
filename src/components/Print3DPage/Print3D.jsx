import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { selectPrint3D } from '../../redux/print3D/print3DSelectors';
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
  const [isModal3DPrintOpen, setIsModal3DPrintOpen] = useState(false);

  const handleOpen3DPrintModal = () => {
    setIsModal3DPrintOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleClose3DPrintModal = () => {
    setIsModal3DPrintOpen(false);
    document.body.style.overflow = 'unset';
  };

  const { name, image, information } = useSelector(selectPrint3D);

  return (
    <Wrapper>
      {!desktopVersion ? (
        <MobCase>
          <Title>{name}</Title>
          <ProductPhoto name={name} image={image} />
          <Description />
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
            <Description />
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
