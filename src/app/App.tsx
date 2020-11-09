import React, { useState } from 'react';
import 'isomorphic-fetch';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import ToasterNotification from '../components/toaster/ToasterNotification';
import ModalContainer from '../components/shared/modal/ModalContainer';
import { AppFooter } from '../components/shared/AppFooter';
import HomePage from '../components/pages/home/HomePage';
import MovieDetailsPage from '../components/pages/details/MovieDetailsPage';
import { SearchPage } from '../components/pages/search/SearchPage';
import { NotFound } from '../components/pages/notFound/NotFound';
import MovieSection from '../components/shared/movieSection/MovieSection';

const App = ({ store }: any): JSX.Element => {
  const [isPathNotFound, toggleIsPathNotFound] = useState(false);
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/film/:id">
          <MovieDetailsPage />
        </Route>
        <Route path="/search/:searchTerm">
          <SearchPage />
        </Route>
        <Route exact path="*">
          <NotFound title="Page" didMount={toggleIsPathNotFound} />
        </Route>
      </Switch>
      {isPathNotFound ? null : <MovieSection />}
      <AppFooter />
      <ToasterNotification />
      <ModalContainer />
    </Provider>
  );
};
export default App;
