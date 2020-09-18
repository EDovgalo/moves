import { Route } from 'react-router-dom';
import React from 'react';
import { DETAILS, HOME } from '../../../app/Config';
import MovieDetails from '../details/MovieDetails';
import { HomeTopSection } from '../home/HomeTopSection';
import MovieSection from '../../shared/movieSection/MovieSection';
import { AppFooter } from '../../shared/AppFooter';

export const MainPage = (): JSX.Element => (
  <>
    <Route path={HOME}>
      <HomeTopSection />
    </Route>
    <Route path={DETAILS}>
      <MovieDetails />
    </Route>
    <MovieSection />
    <AppFooter />
  </>

);
