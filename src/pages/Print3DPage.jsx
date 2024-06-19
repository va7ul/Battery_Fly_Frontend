import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPrint3D } from '../redux/print3D/print3DOperations';
import {
  selectPrint3DIsLoading,
  selectPrint3DError,
} from '../redux/print3D/print3DSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CustomError } from 'components/Shared/CustomError/CustomError';
import { Print3D } from 'components/Print3DPage/Print3D';

const Print3DPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectPrint3DIsLoading);
  const error = useSelector(selectPrint3DError);

  useEffect(() => {
    dispatch(getPrint3D());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && error ? <CustomError /> : <Print3D />}
    </>
  );
};

export default Print3DPage;
