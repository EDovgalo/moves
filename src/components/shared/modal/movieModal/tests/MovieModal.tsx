import React from 'react';
import { shallow } from 'enzyme';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { MovieModal } from '../MovieModal';
import { Movie } from '../../../../../models/movie.model';

describe('MovieModal', () => {
  const movie = new Movie(123,
    'action',
    'https://github.githubassets.com/images/modules/site/home/space.svg',
    'overview',
    123,
    'description',
    3,
    'star wars',
    '12.12.2012');

  const onSubmit = () => undefined;

  it('should correctly render', () => {
    const wrapper = shallow(<MovieModal data={movie} onSubmit={onSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('onSubmit', () => {
    const mockOnSubmit = jest.fn();

    it('should split genre if it string', async () => {
      const m = { ...movie };
      m.genres = '1, 2, 3';
      const { container } = render(<MovieModal data={m} onSubmit={mockOnSubmit} />);
      const submit = container.querySelector('button[type="submit"]');
      fireEvent.click(submit);
      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith({
          ...m,
          genres: ['1', '2', '3'],
          release_date: '2012-12-12',
        });
      });
    });

    it('should correctly submit value', async () => {
      const m = { ...movie };
      m.genres = ['1', '2', '3'];
      const { container } = render(<MovieModal data={m} onSubmit={mockOnSubmit} />);
      const submit = container.querySelector('button[type="submit"]');
      fireEvent.click(submit);
      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith({
          ...m,
          release_date: '2012-12-12',
        });
      });
    });
  });
});
