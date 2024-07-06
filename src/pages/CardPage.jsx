import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOneProduct } from '../redux/products/productsOperations';
import {
  selectOneProductError,
  selectOneProductIsLoading,
} from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CustomError } from 'components/Shared/CustomError/CustomError';
import { Card } from 'components/CardPage/Card';

const CardPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectOneProductIsLoading);
  const error = useSelector(selectOneProductError);
  const { cardId } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(cardId));
  }, [dispatch, cardId]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && error ? <CustomError /> : <Card />}
    </>
  );
};

export default CardPage;
