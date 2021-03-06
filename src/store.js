import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import authReducers from './reducers/authReducers';
import pantryReducers from './reducers/pantryReducers';
import recipeReducers from './reducers/recipeReducers';
import filterIngredientsReducers from './reducers/filterIngredientsReducers';
import apiRecipeSearchReducers from './reducers/apiRecipeSearchReducers';

const store = createStore(
  combineReducers({
    form: formReducer,
    authReducers: authReducers,
    pantryReducers: pantryReducers,
    recipeReducers: recipeReducers,
    filterIngredientsReducers: filterIngredientsReducers,
    apiRecipeSearchReducers: apiRecipeSearchReducers
  }),
  applyMiddleware(thunk, promise)
);

export default store;