import { useEffect } from 'react';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import {
  selectIsLoading,
  selectIsLoadingOrder,
} from '../redux/user/userSelectors';
import { getOrdersHistory } from '../redux/user/userOperations';
import { OrdersHistory } from 'components/OrdersHistoryPage/OrdersHistory';

const OrdersHistoryPage = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectIsLoading);
  const isLoadingOrder = useTypedSelector(selectIsLoadingOrder);

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
