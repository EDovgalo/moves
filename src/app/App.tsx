import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../store';
import ToasterNotification from '../components/toaster/ToasterNotification';
import ModalContainer from '../components/shared/modal/ModalContainer';
import { AppFooter } from '../components/shared/AppFooter';
import { HomePage } from '../components/pages/home/HomePage';
import MovieDetailsPage from '../components/pages/details/MovieDetailsPage';
import { SearchPage } from '../components/pages/search/SearchPage';
import { NotFound } from '../components/pages/notFound/NotFound';
import MovieSection from '../components/shared/movieSection/MovieSection';

const App = (): JSX.Element => {
  const [isPathNotFound, toggleIsPathNotFound] = useState(false);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/film/:id">
              <MovieDetailsPage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route exact path="*">
              <NotFound title="Page" didMount={toggleIsPathNotFound} />
            </Route>
          </Switch>
          {isPathNotFound ? null : <MovieSection /> }

          <AppFooter />
        </Router>
        <ToasterNotification />
        <ModalContainer />
      </Provider>
    </React.StrictMode>
  );
};
export default App;
