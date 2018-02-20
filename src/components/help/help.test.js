import React from 'react';
import {shallow} from 'enzyme';
import Help from './help';

describe('<Help />', () => {
  it('Renders without crashing', () => {
    shallow(<Help />);
  });

  it('updates state when h2 is clicked', () => {
    const wrapper = shallow(<Help />);
    wrapper.find('.new').simulate('click');
    expect(wrapper.state('newRecipeIsOpened')).toEqual(true);
  });
});
