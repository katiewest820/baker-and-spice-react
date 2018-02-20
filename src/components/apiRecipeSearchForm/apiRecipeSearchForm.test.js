import React from 'react';
import {shallow} from 'enzyme';
import APIRecipeSearchForm from './apiRecipeSearchForm';

describe('<APIRecipeSearchForm />', () => {
  it('Renders without crashing', () => {
    shallow(<APIRecipeSearchForm />);
  });
});