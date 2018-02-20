import React from 'react';
import {shallow} from 'enzyme';
import {SearchMyRecipes} from './searchMyRecipes';
import '../../mock-localStorage';

describe('<SearchMyRecipes />', () => {

  let params = {params: {searchTerm: 'searchTerm'}}

  let searchResults = [];
  for(let i = 0; i < 3; i++){
    searchResults.push({
      recipeImages: 'undefined',
      recipeTitle: `title${i}`,
      recipeSlug: `slug${i}`
    })
  }

  it('Renders without crashing', () => {
    shallow(<SearchMyRecipes 
      match={params} 
      searchResults={searchResults} 
      localStorage={window.localStorage}
      getRecipesBySearchTerm={() => {}}
      reset={() => {}}
    />);
  });
});