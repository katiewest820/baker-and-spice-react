import {MISSING_PANTRY_INGREDIENTS, missingPantryIngredients} from './filterIngredientsActions';

describe('missingPantryIngredients', () => {
  it('Should return the action', () => {
    const recipeIngredients = 'recipe';
    const pantryIngredients = 'pantry';
    const action = missingPantryIngredients(recipeIngredients, pantryIngredients);
    expect(action.type).toEqual(MISSING_PANTRY_INGREDIENTS);
    expect(action.payload.recipeItems).toEqual('recipe');
    expect(action.payload.pantryItems).toEqual('pantry');
  });
});