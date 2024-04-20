// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { Print3D } from 'components/Print3DPage/Print3D';

const Print3DPage = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectOneProductIsLoading);
  // const error = useSelector(selectOneProductError);

  // useEffect(() => {
  //   dispatch(get3DPrint());
  // }, [dispatch]);

  return (
    <>
      {/* {isLoading && <CustomLoader />} */}
      {/* {!isLoading && !error && <Print3D />} */}
      <Print3D />
    </>
  );
};

export default Print3DPage;
