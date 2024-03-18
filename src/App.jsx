import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from 'routes/PrivateRoute';
import { Layout } from './components/Layout/Layout';
// import { selectIsRefreshing } from 'redux/auth/authSelectors.js';
// import { refreshUser } from 'redux/auth/authOperations.js';

const lazyLoadPage = importPath => lazy(() => import(`./pages/${importPath}`));

const MainPage = lazyLoadPage('MainPage.jsx');
const AboutPage = lazyLoadPage('AboutPage.jsx');
const AssortmentPage = lazyLoadPage('AssortmentPage.jsx');
const SalesPage = lazyLoadPage('SalesPage.jsx');
const BatteriesPage = lazyLoadPage('BatteriesPage.jsx');
const Batteries18650Page = lazyLoadPage('Batteries18650Page.jsx');
const Batteries21700Page = lazyLoadPage('Batteries21700Page.jsx');
const Batteries32650Page = lazyLoadPage('Batteries32650Page.jsx');
const BatteriesLiPoPage = lazyLoadPage('BatteriesLipoPage.jsx');
const BatteriesLifepo4Page = lazyLoadPage('BatteriesLifepo4Page.jsx');
const AssemblyPage = lazyLoadPage('AssembliesPage.jsx');
const BatteriesForFPVPage = lazyLoadPage('BatteriesForFPVPage.jsx');
const BatteriesForTransportPage = lazyLoadPage('BatteriesForTransportPage.jsx');
const BatteriesForToysPage = lazyLoadPage('BatteriesForToysPage.jsx');
const DevicesPage = lazyLoadPage('DevicesPage.jsx');
const MaterialsPage = lazyLoadPage('MaterialsPage.jsx');
const CardPage = lazyLoadPage('CardPage.jsx');
const DeliveryPaymentPage = lazyLoadPage('DeliveryPaymentPage.jsx');
const ContactsPage = lazyLoadPage('ContactsPage.jsx');
const GuaranteesPage = lazyLoadPage('GuaranteesPage.jsx');
const CheckoutPage = lazyLoadPage('CheckoutPage.jsx');
const UserProfilePage = lazyLoadPage('UserProfilePage.jsx');
const OrdersHistoryPage = lazyLoadPage('OrdersHistoryPage.jsx');
const FavoritesPage = lazyLoadPage('FavoritesPage.jsx');

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
        <Route path="/guarantees" element={<GuaranteesPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/assortment" element={<AssortmentPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/batteries" element={<BatteriesPage />} />
        <Route path="/batteries-18650" element={<Batteries18650Page />} />
        <Route path="/batteries-21700" element={<Batteries21700Page />} />
        <Route path="/batteries-32650" element={<Batteries32650Page />} />
        <Route path="/batteries-li-po" element={<BatteriesLiPoPage />} />
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
        <Route path="/assortment/:cardId" element={<CardPage />} />
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
