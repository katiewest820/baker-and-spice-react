import React from 'react';
import {shallow} from 'enzyme';
import {MyRecipes} from './myRecipes';
import '../../mock-localStorage';
import {getAllRecipes} from '../../actions/recipeActions';


describe('<MyRecipes />', () => {

  let allRecipes = [];
    beforeAll(() => {
      for (let i = 0; i < 10; i++) {
        allRecipes.push({
            recipeTitle: `Title ${i}`,
            recipeInstructions: `Instructions ${i}`
        });
      }
    });
    
  it('Renders without crashing', () => {
    shallow(<MyRecipes 
      allRecipes={allRecipes} 
      localStorage={window.localStorage} 
      getAllRecipes={() => {}}/>);
  });
});