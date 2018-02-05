import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
//import authReducer from './reducers/auth';
import promise from 'redux-promise';
import pantryReducers from './reducers/pantryReducers';

const store = createStore(
  combineReducers({
    form: formReducer,
    //auth: authReducer,
    pantryReducers: pantryReducers
  }),
  applyMiddleware(thunk, promise)
);

export default store;