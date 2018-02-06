import axios from 'axios';
export const MISSING_PANTRY_INGREDIENTS = 'MISSING_PANTRY_INGREDIENTS';

export function missingPantryIngredients(recipeIngredients, pantryIngredients){
  return {
    type: MISSING_PANTRY_INGREDIENTS,
    payload: {pantryItems: pantryIngredients, recipeItems: recipeIngredients}
  }
};