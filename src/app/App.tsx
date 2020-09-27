import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { AppErrorBoundary } from './AppErrorBoundary';
import { MainPage } from '../components/pages/main/MainPage';
import { HOME } from './Config';
import store from '../store';
// import toaster from '../components/toaster';
//
// <button onClick={() => {
//   toaster.success('test')
// }}>aaaaaaaaaaaaaa</button>

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
    </Provider>
  </React.StrictMode>
);
export default App;
