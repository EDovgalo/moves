import React from 'react';
import { HomePage } from '../pages/home/HomePage';
import { AppFooter } from '../components/AppFooter';
import { AppErrorBoundary } from './AppErrorBoundary';

const App = () => (
  <React.StrictMode>
    <>
      <AppErrorBoundary>
        <HomePage />
        <AppFooter />
      </AppErrorBoundary>
    </>
  </React.StrictMode>
);
export default App;
