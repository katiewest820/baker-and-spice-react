import {
  SUBMIT_NEW_RECIPE, 
  submitNewRecipe, 
  EDIT_RECIPE, 
  editRecipe, 
  DELETE_RECIPE, 
  deleteRecipe, 
  GET_ALL_RECIPES, 
  getAllRecipes,
  GET_RECIPES_BY_SEARCH_TERM,
  getRecipesBySearchTerm, 
  getOneRecipe, 
  GET_ONE_RECIPE } from './recipeActions';

localStorage.setItem('authToken', '123');
localStorage.setItem('userId', '123');

describe('submitNewRecipe', () => {
  it('Should return the action', () => {
    const newRecipeData = 'newRecipe';
    const url = 'https://myfakeurl.com';
    const action = submitNewRecipe(url, newRecipeData);
    expect(action.type).toEqual(SUBMIT_NEW_RECIPE);
  });
});

describe('editRecipe', () => {
  it('Should return action', () => {
    const editData = 'editData';
    const url = 'https://myfakeurl.com';
    const action = editRecipe(url, editData);
    expect(action.type).toEqual(EDIT_RECIPE);
  });
});

describe('deleteRecipe', () => {
  it('Should return action', () => {
    const url = 'https://myfakeurl.com';
    const action = deleteRecipe(url);
    expect(action.type).toEqual(DELETE_RECIPE);
  });
});

describe('getAllRecipes', () => {
  it('Should return action', () => {
    const url = 'https://myfakeurl.com';
    const action = getAllRecipes(url);
    expect(action.type).toEqual(GET_ALL_RECIPES);
  });
});

describe('getRecipesBySearchTerm', () => {
  it('Should return action', () => {
    const url = 'https://myfakeurl.com';
    const action = getRecipesBySearchTerm(url);
    expect(action.type).toEqual(GET_RECIPES_BY_SEARCH_TERM);
  });
});

describe('getOneRecipe', () => {
  it('Should return action', () => {
    const url = 'https://myfakeurl.com';
    const action = getOneRecipe(url);
    expect(action.type).toEqual(GET_ONE_RECIPE);
  });
});