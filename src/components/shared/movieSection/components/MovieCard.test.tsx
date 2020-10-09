import * as React from 'react';
import { shallow } from 'enzyme';
import { MovieCard } from './MovieCard';
import { Movie } from '../../../../models/movie.model';

test('CheckboxWithLabel changes the text after click', () => {
  const mockMovie = { id: 1,
    poster_path: 'test',
    title: 'test title',
    release_date: '12.12.2020',
    genres: ['genres'] } as Movie;
  const onSelectMovie = () => undefined;

  const checkbox = shallow(<MovieCard movie={mockMovie} onSelectMovie={onSelectMovie} />);

  expect(checkbox).toMatchSnapshot();
});
