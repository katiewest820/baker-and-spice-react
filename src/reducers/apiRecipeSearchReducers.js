import {API_RECIPE_SEARCH} from '../actions/apiRecipeSearchActions';

const initialState = {
  searchResults: [],
  errorMsg: ''
};

export default(state=initialState, action) => {
  //error handler
  if(action.error){
    return state
  }
  switch(action.type){
    case API_RECIPE_SEARCH:
    //returns error message if no data returned
      if(action.payload.data.length < 1){
        return state = {...state, searchResults: [], errorMsg: 'No results found. Please try your search again.'};
      }
    //returns search results
      return state = {...state, searchResults: action.payload.data, errorMsg: ''};
    default:
      return state
  }
}; 