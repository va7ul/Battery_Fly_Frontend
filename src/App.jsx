import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from 'components/routes/PrivateRoute';
import { Layout } from 'components/Layout/Layout';
// import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
// import { refreshUser } from 'redux/auth/authOperations.js';

const MainPage = lazy(() => import('pages/MainPage.jsx'));
const AboutPage = lazy(() => import('pages/AboutPage.jsx'));
const AssortmentPage = lazy(() => import('pages/AssortmentPage.jsx'));
const SalesPage = lazy(() => import('pages/SalesPage.jsx'));
const BatteriesPage = lazy(() => import('pages/BatteriesPage.jsx'));
const Batteries18650Page = lazy(() => import('pages/Batteries18650Page.jsx'));
const Batteries21700Page = lazy(() => import('pages/Batteries21700Page.jsx'));
const Batteries32650Page = lazy(() => import('pages/Batteries32650Page.jsx'));
const BatteriesLiIonPage = lazy(() => import('pages/BatteriesLiIonPage.jsx'));
const BatteriesLifepo4Page = lazy(() =>
  import('pages/BatteriesLifepo4Page.jsx')
);
const AssemblyPage = lazy(() => import('pages/AssemblyPage.jsx'));
const BatteriesForFPVPage = lazy(() => import('pages/BatteriesForFPVPage.jsx'));
const BatteriesForTransportPage = lazy(() =>
  import('pages/BatteriesForTransportPage.jsx')
);
const BatteriesForToysPage = lazy(() =>
  import('pages/BatteriesForToysPage.jsx')
);
const DevicesPage = lazy(() => import('pages/DevicesPage.jsx'));
const MaterialsPage = lazy(() => import('pages/MaterialsPage.jsx'));
const ItemPage = lazy(() => import('pages/ItemPage.jsx'));
const DeliveryPaymentPage = lazy(() => import('pages/DeliveryPaymentPage.jsx'));
const ContactsPage = lazy(() => import('pages/ContactsPage.jsx'));
const CheckoutPage = lazy(() => import('pages/CheckoutPage.jsx'));
const UserProfilePage = lazy(() => import('pages/UserProfilePage.jsx'));
const OrdersHistoryPage = lazy(() => import('pages/OrdersHistoryPage.jsx'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage.jsx'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery-and-payment" element={<DeliveryPaymentPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/assortment" element={<AssortmentPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/batteries" element={<BatteriesPage />} />
        <Route path="/batteries-18650" element={<Batteries18650Page />} />
        <Route path="/batteries-21700" element={<Batteries21700Page />} />
        <Route path="/batteries-32650" element={<Batteries32650Page />} />
        <Route path="/batteries-li-ion" element={<BatteriesLiIonPage />} />
        <Route path="/batteries-lifepo4" element={<BatteriesLifepo4Page />} />
        <Route path="/assembly" element={<AssemblyPage />} />
        <Route path="/batteries-for-fpv" element={<BatteriesForFPVPage />} />
        <Route
          path="/batteries-for-transport"
          element={<BatteriesForTransportPage />}
        />
        <Route path="/batteries-for-toys" element={<BatteriesForToysPage />} />
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/items/:itemId" element={<ItemPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/" component={<UserProfilePage />} />
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute redirectTo="/" component={<OrdersHistoryPage />} />
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
          }
        />
        <Route path="*" element={<MainPage />} />
      </Route>
    </Routes>
  );
};
