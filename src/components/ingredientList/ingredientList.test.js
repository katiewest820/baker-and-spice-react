import React from 'react';
import {shallow} from 'enzyme';
import IngredientList from './ingredientList';

describe('<IngredientList />', () => {
  it('Renders without crashing', () => {
    shallow(<IngredientList />);
  });
});