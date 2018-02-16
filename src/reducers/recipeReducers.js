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
  finishedLoading: false,
  oneRecipe: '',
  searchResults: [],
  deleted: false,
  newRecipeIngredientList: [],
  creatingRecipeIngredientList: [],
  recipeSlug: ''
};

export default(state=initialState, action) => {
  if(action.error){
    return state
  }
  switch(action.type){
    case GET_ONE_RECIPE:
      //return one recipe
      return state = {
        ...state, 
        oneRecipe: action.payload.data.data, 
        finishedLoading: false,
        deleted: false,   
        recipeSlug: ''
      };
    case GET_ALL_RECIPES:
      //return all recipes
      return state = {
        ...state, 
        allRecipes: action.payload.data.data, 
        finishedLoading: true,
        searchResults: [],
        creatingRecipeIngredientList: [], 
        newRecipeIngredientList: [], 
        oneRecipe: '', 
        deleted: false,   
        recipeSlug: ''
      }
    case GET_RECIPES_BY_SEARCH_TERM:
      //return recipes by search term
      return state = {
        ...state,
        searchResults: action.payload.data.data,
        finishedLoading: true
      } 
    case DELETE_RECIPE:
      return state = {
        ...state, 
        deleted: true,
        finishedLoading: false, 
        recipeSlug: '',
        errorMsg: ''
      }
    case SUBMIT_NEW_RECIPE:
      return state = {
        ...state, 
        creatingRecipeIngredientList: [], 
        newRecipeIngredientList: [], 
        deleted: false, 
        finishedLoading: false,
        recipeSlug: action.payload.data.data.recipeSlug
      }
    case EDIT_RECIPE:
      //return edited recipe
      return state = {
        ...state, 
        oneRecipe: '', 
        creatingRecipeIngredientList: [], 
        newRecipeIngredientList: [], 
        deleted: false, 
        finishedLoading: false,
        recipeSlug: action.payload.data.data.recipeSlug
      }
    case ADD_INGREDIENT_TO_RECIPE:
      //adding ingredients to edited recipe
      let updatedIngredientList = state.creatingRecipeIngredientList.slice();
      updatedIngredientList.push(action.payload);
      return state = {
        ...state, 
        creatingRecipeIngredientList: updatedIngredientList, 
        newRecipeIngredientList: updatedIngredientList
      }
    case NEW_RECIPE_INGREDIENT_LIST:
      //copy of ingredient list that is final and saved after edits and adds
      return state = {
        ...state, 
        newRecipeIngredientList: action.payload.slice(), 
        deleted: false,   
        recipeSlug: ''
      }
    case EDIT_NEW_RECIPE_INGREDIENT_LIST:
      //allows edits to inputs while building recipe list
      return state = {
        ...state, 
        newRecipeIngredientList: action.payload.slice(), 
        creatingRecipeIngredientList: action.payload.slice(),
        recipeSlug: ''
      }
    default: 
      return state;
  }
};