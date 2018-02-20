import React from 'react';
import {shallow} from 'enzyme';
import store from '../../store';
import {IngredientInputs} from './ingredientInputs';

describe('<IngredientInputs />', () => {
  it('Renders without crashing', () => {
    shallow(<IngredientInputs store={store} />)
  });
});