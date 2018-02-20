import React from 'react';
import {shallow} from 'enzyme';
import {NewRecipe} from './newRecipe';
import store from '../../store'; 

describe('<NewRecipe />', () => {
  it('Renders without crashing', () => {
    shallow(<NewRecipe store={store}/>);
  });
});