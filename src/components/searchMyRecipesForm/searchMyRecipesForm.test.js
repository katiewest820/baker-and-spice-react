import React from 'react';
import {shallow} from 'enzyme';
import SearchMyRecipesForm from './searchMyRecipesForm';

describe('<SearchMyRecipesForm />', () => {
  it('Renders without crashing', () => {
    shallow(<SearchMyRecipesForm />);
  });
});