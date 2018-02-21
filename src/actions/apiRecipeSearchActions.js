import axios from 'axios';
export const API_RECIPE_SEARCH = 'API_RECIPE_SEARCH';

export function apiRecipeSearch(url){
  const request = axios.get(url);
  return{
    type: API_RECIPE_SEARCH,
    payload: request
  };
};