import React from 'react';
import { shallow } from 'enzyme';
import { MovieModalItem } from '../MovieModalItem';

describe('MovieModalItem', () => {
  const data = {
    title: 'test title',
    placeholder: 'placeholder',
    errors: '',
    value: 'start wars',
    name: 'title',
    handlerChange: value => undefined,
  };

  it('should correctly render title', () => {
    const wrapper = shallow(<MovieModalItem {...data} />);
    expect(wrapper.find('.movie-modal-title').text()).toEqual('test title');
  });

  it('should correctly render title', () => {
    const wrapper = shallow(<MovieModalItem {...data} />);
    expect(wrapper.find('.movie-modal-title').text()).toEqual('test title');
  });

  it('should correctly set placeholder of input', () => {
    const wrapper = shallow(<MovieModalItem {...data} />);
    expect(wrapper.find('input').at(0).props().placeholder).toEqual('placeholder');
  });

  it('should not display an error block if it does not exist', () => {
    const wrapper = shallow(<MovieModalItem {...data} />);
    expect(wrapper.find('.error').exists()).toBeFalsy();
  });

  it('should render errors', () => {
    const d = { ...data, errors: 'error' };
    const wrapper = shallow(<MovieModalItem {...d} />);
    expect(wrapper.find('.error').text()).toEqual('error');
  });

  it('should correctly render value if it array', () => {
    const d = { ...data };
    d.value = ['one', 'two'] as any;
    const wrapper = shallow(<MovieModalItem {...d} />);
    expect(wrapper.find('input').props().value).toEqual('one, two');
  });
});
