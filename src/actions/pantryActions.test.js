import {SUBMIT_NEW_PANTRY_ITEM, submitNewPantryItem, EDIT_PANTRY_ITEM, editPantryItem, DELETE_PANTRY_ITEM, deletePantryItem, GET_PANTRY_ITEMS, getPantryItems} from './pantryActions';

 localStorage.setItem('authToken', '123');
 localStorage.setItem('userId', '123');

describe('submitNewPantryItem', () => {
  it('Should return the action', () => {
    const pantryItems = {item: 'item', inStock: true};
    const url = 'https://myfakeurl.com';
    const action = submitNewPantryItem(url, {item: pantryItems.item, inStock: pantryItems.inStock});
    expect(action.type).toEqual(SUBMIT_NEW_PANTRY_ITEM);
  });
});

describe('deletePantryItem', () => {
  it('Should return the action', () => {
    const url = 'https://myfakeurl.com';
    const action = deletePantryItem(url);
    expect(action.type).toEqual(DELETE_PANTRY_ITEM);
  });
});

describe('editPantryItem', () => {
  it('Should return the action', () => {
    const editValue = true;
    const url = 'https://myfakeurl.com';
    const action = editPantryItem(url, {inStock: editValue});
    expect(action.type).toEqual(EDIT_PANTRY_ITEM);
  });
});

describe('getPantryItems', () => {
  it('Should return the action', () => {
    const url = 'https://myfakeurl.com';
    const action = getPantryItems(url);
    expect(action.type).toEqual(GET_PANTRY_ITEMS);
  });
});