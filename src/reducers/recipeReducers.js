import axios from 'axios';
import {API_BASE_URL} from '../config';
import {GET_ONE_RECIPE, 
        GET_ALL_RECIPES, 
        DELETE_RECIPE,
        SUBMIT_NEW_RECIPE, 
        NEW_RECIPE_INGREDIENT_LIST, 
        EDIT_NEW_RECIPE_INGREDIENT_LIST} from '../actions/recipeActions';

const initialState = {
  allRecipes: [],
  oneRecipe: {},
  errorMsg: '',
  deleted: false,
  newRecipeIngredientList: [],
  recipeSlug: ''

}

export default(state=initialState, action) => {
  switch(action.type){
    case GET_ONE_RECIPE:
      //error handling with one recipe search
      if(action.payload.response){
        console.log(action.payload.response)
        return state = {...state, errorMsg: 'No results found. Please try your search again', deleted: false, recipeSlug: ''} 
      }
      return state = {...state, oneRecipe: action.payload.data.data, errorMsg: '', deleted: false, recipeSlug: ''} 
    case GET_ALL_RECIPES:
      console.log(action)
      return state = {...state, allRecipes: action.payload.data.data, oneRecipe: {},  errorMsg: '', deleted: false, recipeSlug: ''}
    case DELETE_RECIPE:
      return state = {...state, deleted: true, recipeSlug: ''};
    case SUBMIT_NEW_RECIPE:
      console.log(action)
      console.log(state)
      return state = {...state, deleted: false, errorMsg: '', recipeSlug: action.payload.data.data.recipeSlug}
    case NEW_RECIPE_INGREDIENT_LIST:
      let updatedIngredientList = state.newRecipeIngredientList.slice()
      console.log(action.payload)
      updatedIngredientList.push(action.payload)
      console.log(updatedIngredientList)
      return state = {...state, newRecipeIngredientList: updatedIngredientList, errorMsg: '', deleted: false, recipeSlug: ''}
    case EDIT_NEW_RECIPE_INGREDIENT_LIST:
      return state = {...state, newRecipeIngredientList: action.payload.slice(), recipeSlug: ''}
    default: 
      return state
  }
}