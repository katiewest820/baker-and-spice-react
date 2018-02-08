import axios from 'axios';
export const SUBMIT_NEW_PANTRY_ITEM = 'SUBMIT_NEW_PANTRY_ITEM';
export const EDIT_PANTRY_ITEM = 'EDIT_PANTRY_ITEM';
export const DELETE_PANTRY_ITEM = 'DELETE_PANTRY_ITEM';
export const GET_PANTRY_ITEMS = 'GET_PANTRY_ITEMS';
//let token = localStorage.getItem('authToken');
let myStorage = window.localStorage;


export function submitNewPantryItem(url, pantryItems){
  //let userId = localStorage.getItem('userId');
  
  const request = axios.post(url, {token: myStorage.authToken, userId: myStorage.userId, item: pantryItems.item, inStock: pantryItems.inStock});
  console.log(pantryItems)
  return {
    type: SUBMIT_NEW_PANTRY_ITEM,
    payload: request
  };
};

export function editPantryItem(url, editValue){
  const request = axios.put(url, {token: myStorage.authToken, inStock: editValue});
  console.log(myStorage)
  return {
    type: EDIT_PANTRY_ITEM,
    payload: request
  };
};

export function deletePantryItem(url){
  const request = axios.delete(url, {headers: {authorization: myStorage.authToken}});
  return {
    type: DELETE_PANTRY_ITEM,
    payload: request
  };
};

export function getPantryItems(url){
  const request = axios.get(url, {headers: {authorization: myStorage.authToken}});
  return {
    type: GET_PANTRY_ITEMS,
    payload: request
  };
};



