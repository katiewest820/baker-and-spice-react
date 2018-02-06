import axios from 'axios';
import {API_BASE_URL} from '../config';
import {GET_ONE_RECIPE, GET_ALL_RECIPES} from '../actions/recipeActions';

const initialState = {
  allRecipes: [],
  oneRecipe: {}
}

export default(state=initialState, action) => {
  switch(action.type){
    case GET_ONE_RECIPE:
      return state = {...state, oneRecipe: action.payload.data.data} 
    case GET_ALL_RECIPES:
      console.log(action)
      return state = {...state, allRecipes: action.payload.data.data}
    default: 
      return state
  }
}