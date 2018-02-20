import {API_RECIPE_SEARCH} from '../actions/apiRecipeSearchActions';

const initialState = {
  searchResults: [],
  errorMsg: '',
  loading: true
};

export default (state=initialState, action) => {
  //error handler
  if(action.error){
    return state
  }
  switch(action.type){
    case API_RECIPE_SEARCH:
    //returns error message if no data returned
      if(action.payload.data.length < 1){
        return state = {
          ...state, 
          searchResults: [],
          loading: false, 
          errorMsg: 'No results found. Please try your search again.'
        };
      }
    //returns search results
      return state = {
        ...state, 
        searchResults: action.payload.data, 
        loading: false,
        errorMsg: ''
      };
    default:
      return state
  }
}; 