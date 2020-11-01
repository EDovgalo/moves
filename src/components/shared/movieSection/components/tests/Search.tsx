import * as React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../Search';

describe('Search', () => {
  const callbackFn = jest.fn();

  it('should render input with correctly value', () => {
    const wrapper = shallow(<Search onSearch={callbackFn} searchValue="test" />);
    expect(wrapper.find('input').props().value).toEqual('test');
  });

  it('should render input with correctly placeholder', () => {
    const wrapper = shallow(<Search onSearch={callbackFn} placeholder="test placeholder" />);
    expect(wrapper.find('input').props().placeholder).toEqual('test placeholder');
  });

  it('should search movies', () => {
    const wrapper = shallow(<Search onSearch={callbackFn} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'star wars' } });
    wrapper.find('button').simulate('click', { preventDefault: () => {} });
    expect(callbackFn).toHaveBeenCalledWith('star wars');
  });
});
