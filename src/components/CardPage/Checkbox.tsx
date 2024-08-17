import { ChangeEvent } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import {
  selectOneProduct,
  selectSelectedSealing,
  selectSelectedHolder,
  selectOneProductPrice,
  selectSealingPrice,
  selectHolderPrice,
} from '../../redux/products/productsSelectors';
import {
  setSelectedHolder,
  setSelectedSealing,
} from '../../redux/products/oneProductSlice';
import { themeMUI } from 'styles/themeMUI';
import { yellow } from '@mui/material/colors';
import { Subtitle, Container, Group, ExtraPrice } from './Card.styled';

const StyledFormGroup = styled(FormGroup)({
  gap: '10px',
  [themeMUI.breakpoints.only('desktop')]: {
    gap: '20px',
  },
  '& .MuiButtonBase-root': {
    padding: '0px 10px 0px 0px',
  },
  '& .MuiFormControlLabel-root': {
    margin: 0,
  },
  '& .MuiTypography-root': {
    fontSize: '10px',
    [themeMUI.breakpoints.only('desktop')]: {
      fontSize: '20px',
    },
  },
});

const StyledCheckbox = styled(Checkbox)({
  '& .MuiSvgIcon-root': {
    width: '20px',
    height: '20px',
    [themeMUI.breakpoints.only('desktop')]: {
      width: '30px',
      height: '30px',
    },
  },
});

export const CheckBox = () => {
  const dispatch = useTypedDispatch();

  const { holder } = useTypedSelector(selectOneProduct);
  const selectedSealing = useTypedSelector(selectSelectedSealing);
  const selectedHolder = useTypedSelector(selectSelectedHolder);
  const oneProductPrice = useTypedSelector(selectOneProductPrice);
  const sealingPrice = useTypedSelector(selectSealingPrice);
  const holderPrice = useTypedSelector(selectHolderPrice);

  const handleSealing = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedSealing(e.target.checked));
  };

  const handleHolder = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedHolder(e.target.checked));
  };

  return (
    <Container>
      <Subtitle>Додаткові послуги:</Subtitle>
      <StyledFormGroup>
        <Group>
          <FormControlLabel
            control={
              <StyledCheckbox
                value={selectedSealing}
                checked={selectedSealing}
                onChange={handleSealing}
                disabled={typeof oneProductPrice === 'string'}
                sx={{
                  color: yellow[800],
                  '&.Mui-checked': {
                    color: yellow[800],
                  },
                }}
              />
            }
            label="Герметизація"
          />
          {selectedSealing && (
            <ExtraPrice>{`+ ${sealingPrice} грн`}</ExtraPrice>
          )}
        </Group>
        {holder && (
          <Group>
            <FormControlLabel
              control={
                <StyledCheckbox
                  onChange={handleHolder}
                  checked={selectedHolder}
                  value={selectedHolder}
                  disabled={typeof oneProductPrice === 'string'}
                  sx={{
                    color: yellow[800],
                    '&.Mui-checked': {
                      color: yellow[800],
                    },
                  }}
                />
              }
              label="Використовувати холдери"
            />
            {selectedHolder && (
              <ExtraPrice>{`+ ${holderPrice} грн`}</ExtraPrice>
            )}
          </Group>
        )}
      </StyledFormGroup>
    </Container>
  );
};
