import React from 'react';
import {shallow} from 'enzyme';
import EditRecipe from './editRecipe';
import store from '../../store';

describe('<EditRecipe />', () => {
  it('Renders without crashing', () => {
    shallow(<EditRecipe store={store} handleSubmit={() => {}}/>);
  });
});