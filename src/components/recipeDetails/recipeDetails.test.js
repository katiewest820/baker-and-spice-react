import React from 'react';
import {shallow} from 'enzyme';
import {RecipeDetails} from './recipeDetails';
import '../../mock-localStorage';

describe('<RecipeDetails />', () => {
  let oneRecipe = [];
  for(let i = 0; i < 3; i++){
    oneRecipe.push({
      recipeTitle: `title ${i}`, 
      recipeInstructions: `instruction ${i}`, 
      recipeImages: 'undefined', 
    })
  }

  let params = new Object;
  params = {params: {recipeSlug: 'slug'}}

  it('Renders without crashing', () => {
    shallow(<RecipeDetails 
      oneRecipe={oneRecipe} 
      match={params} 
      localStorage={window.localStorage}
      getOneRecipe={() => {}}
      getPantryItems={() => {}}
    />);
  });
});