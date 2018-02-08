import axios from 'axios';
export const SUBMIT_NEW_RECIPE = 'SUBMIT_NEW_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const GET_ONE_RECIPE = 'GET_ONE_RECIPE';
export const NEW_RECIPE_INGREDIENT_LIST = 'NEW_RECIPE_INGREDIENT_LIST';
export const EDIT_NEW_RECIPE_INGREDIENT_LIST = 'EDIT_NEW_RECIPE_INGREDIENT_LIST';


export function getOneRecipe(url){
  let token = localStorage.getItem('authToken');
  const request = axios.get(url, {headers: {authorization: token}});
  return {
    type: GET_ONE_RECIPE,
    payload: request
  };
};

export function getAllRecipes(url){
  let token = localStorage.getItem('authToken');
  console.log(token)
  const request = axios.get(url, {headers: {authorization: token}});
  return{
    type: GET_ALL_RECIPES,
    payload: request
  };
};

export function deleteRecipe(url){
  let token = localStorage.getItem('authToken');
  const request = axios.delete(url, {headers: {authorization: token}});
  return {
    type: DELETE_RECIPE,
    payload: request
  };
};

export function submitNewRecipe(url, newRecipeData){
  let token = localStorage.getItem('authToken');
  let userId = localStorage.getItem('userId');
  console.log(userId)
   const request = axios.post(url, newRecipeData);
  //   token: token,
  //   userId: userId,
  //   recipeTitle: newRecipeData.recipeTitle, 
  //   recipeIngredients: newRecipeData.recipeIngredients,
  //   recipeInstructions: newRecipeData.recipeInstructions
  // }
  //);
  return {
    type: SUBMIT_NEW_RECIPE,
    payload: request
  };
};

export const newRecipeIngredientList = payload => ({
  type: NEW_RECIPE_INGREDIENT_LIST,
  payload
});

export const editNewRecipeIngredientList = payload => ({
  type: EDIT_NEW_RECIPE_INGREDIENT_LIST,
  payload
});