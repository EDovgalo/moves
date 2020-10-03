import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { AppErrorBoundary } from './AppErrorBoundary';
import { MainPage } from '../components/pages/main/MainPage';
import { HOME } from './Config';
import store from '../store';
import ToasterNotification from '../components/toaster/ToasterNotification';

const App = (): JSX.Element => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <Redirect to={HOME} />
        </Route>
        <AppErrorBoundary>
          <MainPage />
        </AppErrorBoundary>
      </Router>
      <ToasterNotification />
    </Provider>
  </React.StrictMode>
);
export default App;
