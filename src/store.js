import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
//import authReducer from './reducers/auth';
import promise from 'redux-promise';
import pantryReducers from './reducers/pantryReducers';
import recipeReducers from './reducers/recipeReducers';
import filterIngredientsReducers from './reducers/filterIngredientsReducers';

const store = createStore(
  combineReducers({
    form: formReducer,
    //auth: authReducer,
    pantryReducers: pantryReducers,
    recipeReducers: recipeReducers,
    filterIngredientsReducers: filterIngredientsReducers
  }),
  applyMiddleware(thunk, promise)
);

export default store;