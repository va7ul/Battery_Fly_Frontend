import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTypedDispatch } from './redux/hooks/hooks';
import { PrivateRoute } from 'routes/PrivateRoute';
import { Layout } from './components/Layout/Layout';
import { useAuth } from './utils/hooks';
import { refreshUser } from './redux/user/userOperations';
import { CustomLoader } from './components/Shared/CustomLoader/CustomLoader';


const lazyLoadPage = (importPath: string) =>
  lazy(() => import(`./pages/${importPath}`));

const MainPage = lazyLoadPage('MainPage');
const AboutPage = lazyLoadPage('AboutPage');
const AssortmentPage = lazyLoadPage('AssortmentPage');
const SalesPage = lazyLoadPage('SalesPage');
const BatteriesPage = lazyLoadPage('BatteriesPage');
const Batteries18650Page = lazyLoadPage('Batteries18650Page');
const Batteries21700Page = lazyLoadPage('Batteries21700Page');
const Batteries32650Page = lazyLoadPage('Batteries32650Page');
const BatteriesLiPoPage = lazyLoadPage('BatteriesLipoPage');
const BatteriesLifepo4Page = lazyLoadPage('BatteriesLifepo4Page');
const AssemblyPage = lazyLoadPage('AssembliesPage');
const BatteriesForFPVPage = lazyLoadPage('BatteriesForFPVPage');
const BatteriesForTransportPage = lazyLoadPage('BatteriesForTransportPage');
const BatteriesForToysPage = lazyLoadPage('BatteriesForToysPage');
const DevicesPage = lazyLoadPage('DevicesPage');
const MaterialsPage = lazyLoadPage('MaterialsPage');
const Print3DPage = lazyLoadPage('Print3DPage');
const CardPage = lazyLoadPage('CardPage');
const DeliveryPaymentPage = lazyLoadPage('DeliveryPaymentPage');
const ContactsPage = lazyLoadPage('ContactsPage');
const GuaranteesPage = lazyLoadPage('GuaranteesPage');
const CheckoutPage = lazyLoadPage('CheckoutPage');
const UserProfilePage = lazyLoadPage('UserProfilePage');
const OrdersHistoryPage = lazyLoadPage('OrdersHistoryPage');
const FavoritesPage = lazyLoadPage('FavoritesPage');
const PrivacyPolicyPage = lazyLoadPage('PrivacyPolicyPage');

export const App = () => {
  const dispatch = useTypedDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <CustomLoader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery-and-payment" element={<DeliveryPaymentPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/guarantees" element={<GuaranteesPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
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
        <Route path="/3D-print" element={<Print3DPage />} />
        <Route path="/assortment/:cardId" element={<CardPage />} />
        <Route
          path="/profile"
          element={<PrivateRoute redirectTo="/" component={UserProfilePage} />}
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute redirectTo="/" component={OrdersHistoryPage} />
          }
        />
        <Route
          path="/favorites"
          element={<PrivateRoute redirectTo="/" component={FavoritesPage} />}
        />
        <Route path="*" element={<MainPage />} />
      </Route>
    </Routes>
  );
};
