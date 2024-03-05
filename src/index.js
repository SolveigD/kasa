import React from 'react';
import { createRoot } from 'react-dom/client';
import '../src/sass/components/Header.scss';
import AppRouter from './components/AppRouter';

const root = document.getElementById('root');

const renderApp = () => {
  createRoot(root).render(
    <React.StrictMode>
      <AppRouter />  
    </React.StrictMode>
  );
};

renderApp();