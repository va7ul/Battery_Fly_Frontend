import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import {
  selectIsLoading,
  selectIsLoadingOrder,
} from '../redux/user/userSelectors';
import { getOrdersHistory } from '../redux/user/userOperations';
import { OrdersHistory } from 'components/OrdersHistoryPage/OrdersHistory';

const OrdersHistoryPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLoadingOrder = useSelector(selectIsLoadingOrder);

  useEffect(() => {
    dispatch(getOrdersHistory());
  }, [dispatch]);

  return (
    <>
      {(isLoading || isLoadingOrder) && <CustomLoader />}
      {!isLoading && <OrdersHistory />}
    </>
  );
};

export default OrdersHistoryPage;
