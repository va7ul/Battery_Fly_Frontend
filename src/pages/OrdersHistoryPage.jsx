import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import {
  selectErrorStatus,
  selectIsLoading,
} from '../redux/user/userSelectors';
import { getOrdersHistory } from '../redux/user/userOperations';
import { OrdersHistory } from 'components/OrdersHistoryPage/OrdersHistory';

const OrdersHistoryPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrorStatus);

  useEffect(() => {
    dispatch(getOrdersHistory());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && <OrdersHistory />}
    </>
  );
};

export default OrdersHistoryPage;
