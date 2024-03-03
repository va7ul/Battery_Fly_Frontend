import { Card } from "components/CardPage/Card";
import { getOneProduct } from '../redux/products/productsOperations'; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectOneProduct } from '../redux/products/productsSelectors';

const CardPage = () => {

const dispatch = useDispatch();
  useEffect(() => {
      console.log(111)
        dispatch(getOneProduct("0099"))
  }, [dispatch]);
  
  const card = useSelector(selectOneProduct);
   console.log(card)

  return (
    <Card card={card} />
  )
};

export default CardPage;
