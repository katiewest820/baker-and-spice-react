import {SUBMIT_NEW_PANTRY_ITEM, 
        EDIT_PANTRY_ITEM, 
        DELETE_PANTRY_ITEM, 
        GET_PANTRY_ITEMS
      } from '../actions/pantryActions';

const initialState = {
  pantryItems: []
};

export default(state=initialState, action) => {
  //error handling
  if(action.error){
    return state
  }
  switch(action.type){ 
    case SUBMIT_NEW_PANTRY_ITEM: 
    //adding new pantry item
      let newPantryArr = state.pantryItems.slice();
      newPantryArr.push(action.payload.data.data);
      return state = {...state, pantryItems: newPantryArr};
    case GET_PANTRY_ITEMS: 
    //getting all pantry items
      return state = {...state, pantryItems: action.payload.data.data};
    case EDIT_PANTRY_ITEM: 
    //editing one pantry item
      let newPantryValue = state.pantryItems.map((item) => {
        if(item._id === action.payload.data.data._id){
          return action.payload.data.data;
        }else{
          return item;
        }
      });
      return state = {...state, pantryItems: newPantryValue}; 
    case DELETE_PANTRY_ITEM:
    //delete one item from pantry
      let pantryArrPostDelete = state.pantryItems.filter(item => item._id !== action.payload.data.data._id);
      return state = {...state, pantryItems: pantryArrPostDelete}; 
    default: 
      return state;
  }
};
