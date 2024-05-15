import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  selectPrint3D,
  selectedAccuracy,
  selectedPlactic,
  selectedColor,
} from '../../redux/print3D/print3DSelectors';
import { ProductPhoto } from 'components/Shared/ProductPhoto/ProductPhoto';
import { Modal3DPrint } from 'components/Modals/Modal3DPrint/Modal3DPrint';
import {
  Wrapper,
  MobCase,
  Box,
  Case,
  Title,
  OrderButton,
  StyledInput,
} from './Print3D.styled';
import { ProductInformation } from 'components/Shared/ProductInformation/ProductInformation';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { PriceList } from './PriceList/PriceList';
// import { add3DPrintOrder } from '../../redux/print3D/print3DOperations';

export const Print3D = () => {
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });
  const [isModal3DPrintOpen, setIsModal3DPrintOpen] = useState(false);
  const [file, setFile] = useState('');
  // const dispatch = useDispatch();

  const handleOpen3DPrintModal = () => {
    // let formData = new FormData();
    // formData.append('file', file);

    // for (const value of formData.values()) {
    //   console.log(value);
    // }  //це для відображення полів, які відправляєш

    // dispatch(add3DPrintOrder(formData));

    if (!accuracy || !plactic || !color) {
      return window.alert('Оберіть параметри друку!');
    }

    if (!file) {
      return window.alert('Прикріпіть файл для друку!');
    }

    setIsModal3DPrintOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleClose3DPrintModal = () => {
    setIsModal3DPrintOpen(false);
    document.body.style.overflow = 'unset';
  };

  const { name, image, information } = useSelector(selectPrint3D);
  const accuracy = useSelector(selectedAccuracy);
  const plactic = useSelector(selectedPlactic);
  const color = useSelector(selectedColor);

  const attachFile = e => {
    setFile(e.currentTarget.files[0]);
  };

  return (
    <Wrapper>
      {!desktopVersion ? (
        <MobCase>
          <Title>{name}</Title>
          <ProductPhoto name={name} image={image} />
          <Description />
          <Options />
          <form>
            <StyledInput
              id="file"
              name="file"
              type="file"
              onChange={attachFile}
            />
          </form>
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
            <form>
              <StyledInput
                id="file"
                name="file"
                type="file"
                onChange={attachFile}
              />
            </form>
            <OrderButton
              // disabled={!accuracy || !plactic || !color || !file}
              onClick={handleOpen3DPrintModal}
            >
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
        file={file}
      />
    </Wrapper>
  );
};
