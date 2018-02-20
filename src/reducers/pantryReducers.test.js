import reducer from './pantryReducers';
import {SUBMIT_NEW_PANTRY_ITEM, 
        EDIT_PANTRY_ITEM, 
        DELETE_PANTRY_ITEM, 
        GET_PANTRY_ITEMS
      } from '../actions/pantryActions';

describe('pantryReducers', () => {
  const updateAction = {
    type: SUBMIT_NEW_PANTRY_ITEM,
    payload: {data:{data: {item: 'newItem', inStock: true, _id: '123'}}}
  }
  const deleteAction = {
    type: DELETE_PANTRY_ITEM,
    payload: {data:{data: {item: 'newItem', inStock: true, _id: '123'}}}
  }
  const editAction = {
    type: EDIT_PANTRY_ITEM,
    payload: {data:{data: {item: 'editItem', inStock: false, _id: '123'}}}
  }
  const getAction = {
    type: GET_PANTRY_ITEMS,
    payload: {data: {data: [{item: 'item1', inStock: true, _id: '1'}, {item: 'item2', inStock: true, _id: '2'}]}}
  }
  it('Should set initial state when nothing passed in', () => {
    expect(reducer(undefined, {})).toEqual({pantryItems: []});
  });
  it('Should handle SUBMIT_NEW_PANTRY_ITEM action', () => {
    expect(reducer(undefined, updateAction)).toEqual({pantryItems: [updateAction.payload.data.data]});
  });
  it('Should handle DELETE_PANTRY_ITEM action', () => {
    expect(reducer({pantryItems: [{item: 'newItem', inStock: true, _id: '123'}]} , deleteAction)).toEqual({pantryItems: []});
  });
  it('Should handle EDIT_PANTRY_ITEM action', () => {
    expect(reducer({pantryItems: [{item: 'newItem', inStock: true, _id: '123'}]}, editAction)).toEqual({pantryItems: [editAction.payload.data.data]})
  });
  it('Should handle GET_PANTRY_ITEMS action', () => {
    expect(reducer(undefined, getAction)).toEqual({pantryItems: getAction.payload.data.data});
  });
});