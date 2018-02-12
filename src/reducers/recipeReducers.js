//import axios from 'axios';
//import {API_BASE_URL} from '../config';
import {GET_ONE_RECIPE, 
        GET_ALL_RECIPES,
        GET_RECIPES_BY_SEARCH_TERM,
        EDIT_RECIPE, 
        DELETE_RECIPE,
        SUBMIT_NEW_RECIPE,
        ADD_INGREDIENT_TO_RECIPE, 
        NEW_RECIPE_INGREDIENT_LIST, 
        EDIT_NEW_RECIPE_INGREDIENT_LIST} from '../actions/recipeActions';

const initialState = {
  allRecipes: [],
  oneRecipe: '',
  searchResults: [],
  errorMsg: '',
  deleted: false,
  newRecipeIngredientList: [],
  creatingRecipeIngredientList: [],
  recipeSlug: ''

}

export default(state=initialState, action) => {
  switch(action.type){
    case GET_ONE_RECIPE:
      console.log(action)
      return state = {
        ...state, 
        oneRecipe: action.payload.data.data, 
        deleted: false, 
        errorMsg: '',  
        recipeSlug: ''
      }; 
    
    case GET_ALL_RECIPES:
      console.log(action)
      return state = {
        ...state, 
        allRecipes: action.payload.data.data, 
        searchResults: [],
        creatingRecipeIngredientList: [], 
        newRecipeIngredientList: [], 
        oneRecipe: '', 
        deleted: false, 
        errorMsg: '',  
        recipeSlug: ''
      };
    
    case GET_RECIPES_BY_SEARCH_TERM:
    console.log(action)
      if(action.payload.data.data.length == 0){
        return state = {
          ...state,
          errorMsg: 'No Results please try your search again'
        }
      }else{
        return state = {
          ...state,
          searchResults: action.payload.data.data,
          errorMsg: ''
        }
      }

    case DELETE_RECIPE:
      return state = {
        ...state, 
        deleted: true, 
        recipeSlug: ''
      };
    
    case SUBMIT_NEW_RECIPE:
      console.log(action)
      console.log(state)
      return state = {
        ...state, 
        creatingRecipeIngredientList: [], 
        newRecipeIngredientList: [], 
        deleted: false, 
        errorMsg: '', 
        recipeSlug: action.payload.data.data.recipeSlug
      };
    
    case EDIT_RECIPE:
      console.log(action)
      return state = {
        ...state, 
        oneRecipe: '', 
        creatingRecipeIngredientList: [], 
        newRecipeIngredientList: [], 
        deleted: false, 
        errorMsg: '', 
        recipeSlug: action.payload.data.data.recipeSlug
      };
    
    case ADD_INGREDIENT_TO_RECIPE:
      let updatedIngredientList = state.creatingRecipeIngredientList.slice()
      updatedIngredientList.push(action.payload)
      console.log(action.payload)
      return state = {
        ...state, 
        creatingRecipeIngredientList: updatedIngredientList, 
        newRecipeIngredientList: updatedIngredientList
      }

    case NEW_RECIPE_INGREDIENT_LIST:
      console.log(action.payload)
      return state = {
        ...state, 
        newRecipeIngredientList: action.payload.slice(), 
        deleted: false, 
        errorMsg: '',  
        recipeSlug: ''
      }

    case EDIT_NEW_RECIPE_INGREDIENT_LIST:
      console.log(action.payload)
      return state = {
        ...state, 
        newRecipeIngredientList: action.payload.slice(), 
        creatingRecipeIngredientList: action.payload.slice(),
        recipeSlug: ''
      }
    default: 
      return state
  }
}