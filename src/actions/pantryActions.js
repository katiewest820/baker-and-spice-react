import axios from 'axios';
export const SUBMIT_NEW_PANTRY_ITEM = 'SUBMIT_NEW_PANTRY_ITEM';
export const EDIT_PANTRY_ITEM = 'EDIT_PANTRY_ITEM';
export const DELETE_PANTRY_ITEM = 'DELETE_PANTRY_ITEM';
export const GET_PANTRY_ITEMS = 'GET_PANTRY_ITEMS';

export function submitNewPantryItem(url, pantryItems){
  const request = axios.post(url, {item: pantryItems.item, inStock: pantryItems.inStock});
  console.log(pantryItems)
  return {
    type: SUBMIT_NEW_PANTRY_ITEM,
    payload: request
  };
};

export function editPantryItem(url, editValue){
  const request = axios.put(url, {inStock: editValue});
  console.log(request)
  return {
    type: EDIT_PANTRY_ITEM,
    payload: request
  };
};

export function deletePantryItem(url){
  const request = axios.delete(url);
  return {
    type: DELETE_PANTRY_ITEM,
    payload: request
  };
};

export function getPantryItems(url){
  const request = axios.get(url);
  return {
    type: GET_PANTRY_ITEMS,
    payload: request
  };
};


