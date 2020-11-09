import * as React from 'react';
import { shallow } from 'enzyme';
import { DetailsPageTopSection } from '../DetailsPageTopSection';

describe('DetailsPageTopSection', () => {
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

  it('should correctly render title', () => {
    const wrapper = shallow(<DetailsPageTopSection movie={movie} />);
    expect(wrapper.find('.top-section__title').text()).toEqual('star wars');
  });

  it('should correctly render genres', () => {
    const wrapper = shallow(<DetailsPageTopSection movie={movie} />);
    expect(wrapper.find('.top-section__genres').text()).toEqual('actions, drama');
  });

  it('should correctly render release date', () => {
    const wrapper = shallow(<DetailsPageTopSection movie={movie} />);
    expect(wrapper.find('.top-section__label').text()).toEqual('12.12.2018');
  });
});
