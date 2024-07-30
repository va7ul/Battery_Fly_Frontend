import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';
import { useTypedSelector } from '../../redux/hooks/hooks.ts';
import {
  selectPrint3D,
  selectedAccuracy,
  selectedPlactic,
  selectedColor,
} from '../../redux/print3D/print3DSelectors.ts';
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
  Text,
} from './Print3D.styled.ts';
import { ProductInformation } from 'components/Shared/ProductInformation/ProductInformation';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { PriceList } from './PriceList/PriceList';

export const Print3D = () => {
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });
  const [isModal3DPrintOpen, setIsModal3DPrintOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleOpen3DPrintModal = () => {
    if (!accuracy || !plactic || !color) {
      toast.remove();
      return toast.error('Оберіть параметри друку!');
    }

    if (files.length === 0) {
      toast.remove();
      return toast.error('Прикріпіть файл правильного формату!');
    }

    setIsModal3DPrintOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleClose3DPrintModal = () => {
    setIsModal3DPrintOpen(false);
    document.body.style.overflow = 'unset';
  };

  const { name, image, information } = useTypedSelector(selectPrint3D);
  const accuracy = useTypedSelector(selectedAccuracy);
  const plactic = useTypedSelector(selectedPlactic);
  const color = useTypedSelector(selectedColor);

  const attachFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const allowedExtensions = [
      '.stl',
      '.3mf',
      '.step',
      '.svg',
      '.obj',
      '.amf',
      '.usd',
      '.abc',
      '.ply',
      '.zip',
      '.7z',
      '.rar',
    ];

    const validFiles = selectedFiles.filter(file => {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      return fileExtension && allowedExtensions.includes(fileExtension);
    });

    if (validFiles.length !== selectedFiles.length) {
      toast.error('Будь ласка, оберіть файли з доступними розширеннями!');
    } else {
      setFiles(validFiles);
    }
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
              accept=".stl, .3mf, .step, .svg, .obj, .amf, .usd*, .abc, .ply, .rar, .7z, .zip"
              multiple
              onChange={attachFiles}
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
                accept=".stl, .3mf, .step, .svg, .obj, .amf, .usd*, .abc, .ply, .rar, .7z, .zip"
                multiple
                onChange={attachFiles}
              />
              <Text>
                *Доступні розширення для файлів: .stl, .3mf, .step, .svg, .obj,
                .amf, .usd*, .abc, .ply, .rar, .7z, .zip
              </Text>
            </form>
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
        file={files}
      />
    </Wrapper>
  );
};
