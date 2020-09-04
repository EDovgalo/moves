import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { AppErrorBoundary } from './AppErrorBoundary';
import { MainPage } from '../pages/main/MainPage';
import { HOME } from './Config';

const App = (): JSX.Element => (
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Redirect to={HOME} />
      </Route>
      <AppErrorBoundary>
        <MainPage />
      </AppErrorBoundary>
    </Router>
  </React.StrictMode>
);
export default App;
