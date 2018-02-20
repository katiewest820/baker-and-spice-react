import reducer from './apiRecipeSearchReducers';
import {apiRecipeSearch, API_RECIPE_SEARCH} from '../actions/apiRecipeSearchActions';

describe('apiRecipeSearchReducers', () => {
  it('Should set initial state when nothing passed in', () => {
    expect(reducer(undefined, {})).toEqual({
      searchResults: [], 
      errorMsg: '',
      loading: true
    });
  });

  it('should handle API_RECIPE_SEARCH changes', () => {
    const updateAction = {
      type: API_RECIPE_SEARCH,
      payload: {data: [1,2,3,4]}
    }
    expect(reducer({}, updateAction)).toEqual({errorMsg: '', loading: false, searchResults: [1,2,3,4]});
  });
});