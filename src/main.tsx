import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Theme } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="">
      <ThemeProvider theme={theme as Theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
