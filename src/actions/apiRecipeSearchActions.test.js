import {apiRecipeSearch, API_RECIPE_SEARCH} from './apiRecipeSearchActions';

describe('apiRecipeSearch', () => {
  it('Should return the action', () => {
    const url = 'https://myfakeurl.com';
    const action = apiRecipeSearch(url);
    expect(action.type).toEqual(API_RECIPE_SEARCH);
  });
});