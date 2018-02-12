import axios from 'axios';
export const API_RECIPE_SEARCH = 'API_RECIPE_SEARCH';
let myStorage = window.localStorage;

export function apiRecipeSearch(url){
  const request = axios.get(url, {headers: {authorization: myStorage.authToken}});
  return{
    type: API_RECIPE_SEARCH,
    payload: request
  };
};