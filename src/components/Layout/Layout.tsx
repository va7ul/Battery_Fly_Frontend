import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { themeMUI } from 'styles/themeMUI';
import { Container } from './Layout.styled';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <>
      <ThemeProvider theme={themeMUI}>
        <Header />
        <main>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  );
};
