import * as React from 'react';
import { shallow } from 'enzyme';
import { DeleteMovieModal } from '../DeleteMovieModal';

describe('DeleteMovieModal', () => {
  it('should confirm delete', () => {
    const callbackFn = jest.fn();
    const wrapper = shallow(<DeleteMovieModal onConfirm={callbackFn} />);
    wrapper.find('button').simulate('click');
    expect(callbackFn).toHaveBeenCalled();
  });
});
