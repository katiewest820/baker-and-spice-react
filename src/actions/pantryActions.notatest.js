import {SUBMIT_NEW_PANTRY_ITEM, submitNewPantryItem, EDIT_PANTRY_ITEM, editPantryItem, DELETE_PANTRY_ITEM, deletePantryItem} from './pantryActions';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
const mock = new MockAdapter(axios);
//import localStorage from '../mock-localStorage';

//let myStorage = {authToken: 123, userId: 123}
//let headers = {headers: {authorization: myStorage.authToken}}
(function () {
    let localStorage = {};
    localStorage.setItem = function (key, val) {
         this[key] = val + '';
    }
    localStorage.getItem = function (key) {
        return this[key];
    }
    Object.defineProperty(localStorage, 'length', {
        get: function () { return Object.keys(this).length - 2; }
    });

    // Your tests here

localStorage.setItem('authToken', '123')
localStorage.setItem('userId', '123')
console.log(localStorage)

let myStorage = localStorage

console.log(myStorage)


describe('submitNewPantryItem', () => {
  it('Should return the action', () => {
    const pantryItems = {item: 'item', inStock: true};
    const url = 'https://myfakeurl.com';
    //console.log(myStorage.authToken)
    //const postRequest = mock.onPost(url).reply(200, pantryItems);
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

})();