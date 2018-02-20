import reducer from './recipeReducers';
import {GET_ONE_RECIPE, 
        GET_ALL_RECIPES,
        EDIT_RECIPE, 
        DELETE_RECIPE} from '../actions/recipeActions';

describe('recipeReducers', () => {
  const getOneAction = {
    type: GET_ONE_RECIPE,
    payload: {data:{data: {recipeTitle: 'title', recipeSlug: 'slug', recipeInstructions: 'yes yes yes'}}}
  }
  const deleteAction = {
    type: DELETE_RECIPE
  }
  const getAllAction = {
    type: GET_ALL_RECIPES,
    payload: {data:
      {data: [
        {recipeTitle: 'title1', recipeSlug: 'slug1', recipeInstructions: 'yes yes yes'},
        {recipeTitle: 'title2', recipeSlug: 'slug2', recipeInstructions: 'yes yes yes'} 
      ]}
    }
  }
  const editAction = {
    type: EDIT_RECIPE,
    payload: {data:{data: {recipeSlug: 'editslug2'}}}
  }
  it('Should set initial state when nothing passed in', () => {
    expect(reducer(undefined, {})).toEqual({ 
      allRecipes: [],
      finishedLoading: false,
      oneRecipe: '',
      searchResults: [],
      deleted: false,
      newRecipeIngredientList: [],
      creatingRecipeIngredientList: [],
      recipeSlug: ''
    });
  });
  it('Should handle GET_ONE_RECIPE action', () => {
    expect(reducer(undefined, getOneAction)).toEqual({
      allRecipes: [],
      finishedLoading: false,
      oneRecipe: getOneAction.payload.data.data,
      searchResults: [],
      deleted: false,
      newRecipeIngredientList: [],
      creatingRecipeIngredientList: [],
      recipeSlug: ''
    })
  });
  it('Should handle GET_ALL_RECIPES action', () => {
    expect(reducer(undefined, getAllAction)).toEqual({
      allRecipes: getAllAction.payload.data.data,
      finishedLoading: true,
      oneRecipe: '',
      searchResults: [],
      deleted: false,
      newRecipeIngredientList: [],
      creatingRecipeIngredientList: [],
      recipeSlug: ''
    });
  });
  it('Should handle EDIT_RECIPE action', () => {
    expect(reducer(undefined, editAction)).toEqual({
      allRecipes: [],
      finishedLoading: false,
      oneRecipe: '',
      searchResults: [],
      deleted: false,
      newRecipeIngredientList: [],
      creatingRecipeIngredientList: [],
      recipeSlug: editAction.payload.data.data.recipeSlug
    });
  });
  it('Should handle DELETE_RECIPE action', () => {
    expect(reducer(undefined, deleteAction)).toEqual({
      allRecipes: [],
      finishedLoading: false,
      oneRecipe: '',
      searchResults: [],
      deleted: true,
      newRecipeIngredientList: [],
      creatingRecipeIngredientList: [],
      recipeSlug: ''
    });
  });
});