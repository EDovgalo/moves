import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../../../../models/movie.model';

describe('MovieCard', () => {
  const mockMovie = {
    id: 1,
    poster_path: 'test',
    title: 'test title',
    release_date: '12.12.2020',
    genres: ['genres'],
  } as Movie;

  const onSelectMovie = () => undefined;

  it('should correctly render MovieCard', () => {
    const wrapper = shallow(<MovieCard movie={mockMovie} onSelectMovie={onSelectMovie} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render MovieCard with dropdown', () => {
    const wrapper = mount(<MovieCard movie={mockMovie} onSelectMovie={onSelectMovie} />);
    wrapper.find('.move-card').simulate('mouseenter');
    expect(wrapper).toMatchSnapshot();
  });
});
