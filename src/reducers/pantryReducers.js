//import {API_BASE_URL} from '../config';
import {SUBMIT_NEW_PANTRY_ITEM, 
        EDIT_PANTRY_ITEM, 
        DELETE_PANTRY_ITEM, 
        GET_PANTRY_ITEMS
      } from '../actions/pantryActions';

const initialState = {
  pantryItems: []
}

export default(state=initialState, action) => {
  switch(action.type){
    //adding new pantry item 
    case SUBMIT_NEW_PANTRY_ITEM: 
      console.log(action)
      console.log(state)
       let newPantryArr = state.pantryItems.slice();
       newPantryArr.push(action.payload.data.data);
      
      return state = {...state, pantryItems: newPantryArr}

    //getting all pantry items
    case GET_PANTRY_ITEMS: 
    console.log(action)
      return state = {...state, pantryItems: action.payload.data.data}

    //editing one pantry item
    case EDIT_PANTRY_ITEM: 
      let newPantryValue = state.pantryItems.map((item) => {
      if(item._id === action.payload.data.data._id){
        return action.payload.data.data;
      }else{
        return item;
      }
      });
      return state = {...state, pantryItems: newPantryValue}; 

    //delete one item from pantry
    case DELETE_PANTRY_ITEM:
      let pantryArrPostDelete = state.pantryItems.filter(item => item._id !== action.payload.data.data._id);
      console.log(pantryArrPostDelete)
      return state = {...state, pantryItems: pantryArrPostDelete}; 
    default: 
      return state;
  }
}
