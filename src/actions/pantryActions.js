export const SUBMIT_NEW_PANTRY_ITEM;
export const EDIT_PANTRY_ITEM;
export const DELETE_PANTRY_ITEM;
export const GET_PANTRY_ITEMS;

export const submitNewPantryItem = payload => ({
  type: SUBMIT_NEW_PANTRY_ITEM,
  payload
});

export const editPantryItem = payload => ({
  type: EDIT_PANTRY_ITEM,
  payload
});

export const deletePantryItem = payload => ({
  type: DELETE_PANTRY_ITEM,
  payload
});

export getPantryItem = payload => ({
  type: GET_PANTRY_ITEMS,
  payload
});