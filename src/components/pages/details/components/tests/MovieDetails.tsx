import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { MovieDetails } from '../MovieDetails';

describe('MovieDetails', () => {
  const movie = {
    id: 1,
    title: 'star wars',
    genres: ['actions', 'drama'],
    release_date: '12.12.2018',
    poster_path: 'test',
    runtime: 123,
    overview: 'test',
    vote_average: 5,
  };

  it('should render load spinner', () => {
    const wrapper = mount(<Router><MovieDetails movie={movie} isLoading /></Router>);
    expect(wrapper.find('.load-container')).toBeTruthy();
  });

  it('should render movie details', () => {
    const wrapper = mount(<Router><MovieDetails movie={movie} isLoading={false} /></Router>);
    expect(wrapper.find('.details-page-top-section')).toBeTruthy();
  });

  it('should render not found', () => {
    const wrapper = mount(<Router><MovieDetails movie={null} isLoading={false} /></Router>);
    expect(wrapper.find('.not-found')).toBeTruthy();
  });
});
