import reducer from './filterIngredientsReducers';
import {MISSING_PANTRY_INGREDIENTS} from '../actions/filterIngredientsActions';

describe('filterIngredientsReducers', () => {
  it('Should set initial state when nothing passed in', () => {
    expect(reducer(undefined, {})).toEqual({
      missing: [],
      outOfStock: []
    });
  });
  it('Should handle MISSING_PANTRY_INGREDIENTS action', () => {
    let pantryItems = [];
    for(let i = 0; i < 3; i++){
      pantryItems.push({item: `item${i}`});
    }
    let recipeItems = [];
    for(let i = 0; i < 3; i++){
      recipeItems.push({name: `name${i}`});
    }
    const updateAction = {
      type: MISSING_PANTRY_INGREDIENTS,
      payload: {pantryItems: pantryItems, recipeItems: recipeItems}
    }
    expect(reducer({}, updateAction)).toEqual({missing: ["name0", "name1", "name2"], outOfStock: []});
  });
});