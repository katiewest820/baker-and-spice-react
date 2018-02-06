import axios from 'axios';
export const SUBMIT_NEW_RECIPE = 'SUBMIT_NEW_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_ONE_RECIPE = 'GET_ONE_RECIPE';

export function getOneRecipe(url){
  const request = axios.get(url);
  console.log(request)
  return {
    type: GET_ONE_RECIPE,
    payload: request
  };
};

export function getAllRecipes(url){
  const request = axios.get(url);
  return{
    type: GET_ALL_RECIPES,
    payload: request
  };
};