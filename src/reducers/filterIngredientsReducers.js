import {MISSING_PANTRY_INGREDIENTS} from '../actions/filterIngredientsActions';


const initialState = {
  missing: [],
  outOfStock: []
}

export default(state=initialState, action) => {
  switch(action.type){
    case MISSING_PANTRY_INGREDIENTS:
      let recipeIngredients = [];
      let pantryIngredients = [];
      let outOfStockItems = [];
      for(let i = 0; i < action.payload.pantryItems.length; i++){
         pantryIngredients.push(action.payload.pantryItems[i].item.trim())
      }
      for(let i = 0; i < action.payload.recipeItems.length; i++){
        recipeIngredients.push(action.payload.recipeItems[i].name.trim())
      }
      for(let i = 0; i < action.payload.pantryItems.length; i++){
        if(action.payload.pantryItems[i].inStock == false){
          outOfStockItems.push(action.payload.pantryItems[i].item.trim())
        }
      }
      let missingFromPantryMatches = recipeIngredients.filter(name => pantryIngredients.indexOf(name) < 0);
      let outOfStockMatches = recipeIngredients.filter(name => outOfStockItems.indexOf(name) > -1);
     return state = {...state, missing: missingFromPantryMatches, outOfStock: outOfStockMatches}
    default: 
      return state;  
  }
} 