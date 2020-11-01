import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { NotFound } from '../NotFound';

describe('NotFound', () => {
  it('should correctly render title', () => {
    const wrapper = shallow(<NotFound title="Test title" />);
    expect(wrapper.find('span').text()).toContain('Test title');
  });

  it('should emit value after mount', () => {
    const mockCallback = jest.fn(value => value);
    const wrapper = mount(<NotFound title="Test title" didMount={mockCallback} />);
    expect(mockCallback).toHaveBeenCalledWith(true);
  });
});
