import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../redux/hooks';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/user/userSelectors';

type PrivateRouteProps = {
  component: React.ComponentType;
  redirectTo?: string;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const location = useLocation();
  const isLoggedIn = useTypedSelector(selectIsLoggedIn);
  const isRefreshing = useTypedSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} />
  ) : (
    <Component />
  );
};
