import React from 'react';
import {shallow} from 'enzyme';
import APIRecipeSearch from './apiRecipeSearch';

describe('<APIRecipeSearch />', () => {
  it('Renders without crashing', () => {
    shallow(<APIRecipeSearch />);
  });
});
