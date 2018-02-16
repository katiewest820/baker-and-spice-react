import axios from 'axios';
export const SUBMIT_NEW_RECIPE = 'SUBMIT_NEW_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_RECIPES_BY_SEARCH_TERM = 'GET_RECIPES_BY_SEARCH_TERM';
export const GET_ONE_RECIPE = 'GET_ONE_RECIPE';
export const NEW_RECIPE_INGREDIENT_LIST = 'NEW_RECIPE_INGREDIENT_LIST';
export const EDIT_NEW_RECIPE_INGREDIENT_LIST = 'EDIT_NEW_RECIPE_INGREDIENT_LIST';
export const ADD_INGREDIENT_TO_RECIPE = 'ADD_INGREDIENT_TO_RECIPE';
let myStorage = window.localStorage;

export function getOneRecipe(url){
  const request = axios.get(url, {headers: {authorization: myStorage.authToken}});
  return {
    type: GET_ONE_RECIPE,
    payload: request
  };
};

export function getAllRecipes(url){
  const request = axios.get(url, {headers: {authorization: myStorage.authToken}});
  return{
    type: GET_ALL_RECIPES,
    payload: request
  };
};

export function getRecipesBySearchTerm(url){
  const request = axios.get(url, {headers: {authorization: myStorage.authToken}});
  return{
    type: GET_RECIPES_BY_SEARCH_TERM,
    payload: request
  };
};

export function deleteRecipe(url){
  const request = axios.delete(url, {headers: {authorization: myStorage.authToken}});
  return {
    type: DELETE_RECIPE,
    payload: request
  };
};

export function submitNewRecipe(url, newRecipeData){
  const request = axios.post(url, newRecipeData, {headers: {authorization: myStorage.authToken}});
  return {
    type: SUBMIT_NEW_RECIPE,
    payload: request
  };
};

export function editRecipe(url, editData){
  const request = axios.put(url, editData, {headers: {authorization: myStorage.authToken}});
  return {
    type: EDIT_RECIPE,
    payload: request
  };
};

export const addIngredientToRecipe = payload => ({
  type: ADD_INGREDIENT_TO_RECIPE,
  payload
});

export const newRecipeIngredientList = payload => ({
  type: NEW_RECIPE_INGREDIENT_LIST,
  payload
});

export const editNewRecipeIngredientList = payload => ({
  type: EDIT_NEW_RECIPE_INGREDIENT_LIST,
  payload
});