import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
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
  const dispatch = useDispatch();

  const { holder } = useSelector(selectOneProduct);
  const selectedSealing = useSelector(selectSelectedSealing);
  const selectedHolder = useSelector(selectSelectedHolder);
  const oneProductPrice = useSelector(selectOneProductPrice);
  const sealingPrice = useSelector(selectSealingPrice);
  const holderPrice = useSelector(selectHolderPrice);

  const handleSealing = e => {
    dispatch(setSelectedSealing(e.target.checked));
  };

  const handleHolder = e => {
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
