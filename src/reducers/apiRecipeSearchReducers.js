import {API_RECIPE_SEARCH} from '../actions/apiRecipeSearchActions';

const initialState = {
  searchResults: []
}
export default(state=initialState, action) => {
  switch(action.type){
    case API_RECIPE_SEARCH:
    console.log(action)
      return state = {...state, searchResults: action.payload.data}
    default:
      return state
  }
} 