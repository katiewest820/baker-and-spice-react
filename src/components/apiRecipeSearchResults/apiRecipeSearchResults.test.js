import React from 'react';
import {shallow} from 'enzyme';
import APIRecipeSearchResults from './apiRecipeSearchResults';
import store from '../../store';

describe('<APIRecipeSearchResults />', () => {
  it('Renders without crashing', () => {
    shallow(<APIRecipeSearchResults store={store}/>);
  });
});