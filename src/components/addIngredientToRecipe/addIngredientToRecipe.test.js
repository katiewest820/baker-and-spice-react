import React from 'react';
import {shallow} from 'enzyme';
import AddIngredientToRecipe from './addIngredientToRecipe';

describe('<AddIngredientToRecipe />', () => {
  it('Renders without crashing', () => {
    shallow(<AddIngredientToRecipe />);
  });
});