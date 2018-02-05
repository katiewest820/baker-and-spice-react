import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import pantryReducers from './reducers/pantryReducers';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    pantryReducers: pantryReducers
  }),
  applyMiddleware(thunk)
);

export default store;