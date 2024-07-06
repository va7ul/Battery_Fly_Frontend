import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { persistor, store } from './redux/store.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/GlobalStyled';
import { App } from 'App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Battery_Fly_Frontend">
          <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
            <Toaster
              toastOptions={{
                duration: 3000,
                style: {
                  borderRadius: '10px',
                  fontSize: '16px',
                },
                loading: {
                  style: {
                    border: `1px solid ${theme.colors.hoverColor}`,
                  },
                },
                success: {
                  style: {
                    border: `1px solid ${theme.colors.success}`,
                  },
                },
                error: {
                  duration: 4000,
                  style: {
                    border: `1px solid ${theme.colors.error}`,
                  },
                },
              }}
            />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
