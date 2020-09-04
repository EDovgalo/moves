import { Route } from 'react-router-dom';
import React from 'react';
import { DETAILS, HOME } from '../../app/Config';
import { MovieDetails } from '../details/MovieDetails';
import { HomeSearchSection } from '../home/HomeSearchSection';
import { MovieSection } from '../../components/movieSection/MovieSection';
import { AppFooter } from '../../components/AppFooter';

export const MainPage = (): JSX.Element => (
  <>
    <Route path={HOME}>
      <HomeSearchSection />
    </Route>
    <Route path={DETAILS}>
      <MovieDetails />
    </Route>
    <MovieSection />
    <AppFooter />
  </>

);
