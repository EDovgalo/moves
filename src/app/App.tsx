import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { AppErrorBoundary } from './AppErrorBoundary';
import { DetailsPage } from '../pages/details/DetailsPage';

const HOME = '/home';
const DETAILS = '/details/:id';

const App = (): JSX.Element => (
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Redirect to={HOME} />
      </Route>
      <AppErrorBoundary>
        <Route path={HOME}>
          <HomePage />
        </Route>
        <Route path={DETAILS}>
          <DetailsPage />
        </Route>
      </AppErrorBoundary>
    </Router>
  </React.StrictMode>
);
export default App;
