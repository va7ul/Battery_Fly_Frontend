import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useTypedSelector = useSelector.withTypes<RootState>();
export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
