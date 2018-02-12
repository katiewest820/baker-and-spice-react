import {API_RECIPE_SEARCH} from '../actions/apiRecipeSearchActions';

const initialState = {
  searchResults: [],
  errorMsg: ''
}
export default(state=initialState, action) => {
  switch(action.type){
    case API_RECIPE_SEARCH:
    if(action.payload.data.length < 1){
      return state = {...state, searchResults: [], errorMsg: 'No results found. Please try your search again.'}
    }
    console.log(action)
      return state = {...state, searchResults: action.payload.data, errorMsg: ''}
    default:
      return state
  }
} 