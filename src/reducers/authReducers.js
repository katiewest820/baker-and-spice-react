import {LOGIN, REGISTER, LOGOUT} from '../actions/authActions';
import {saveAuthTokenAndUserId, clearLocalStorage} from '../local-storage';

const initialState = {
  loginRedirect: false
};

export default(state=initialState, action) => {
  //error handler
  if(action.error){
    return state
  }
  switch(action.type){
    case LOGIN:
    //login user and set local storage
      saveAuthTokenAndUserId(action.payload.data.token, action.payload.data.userId);
      return state = {...state, loginRedirect: true};
    case REGISTER:
    //register user and set local storage
      saveAuthTokenAndUserId(action.payload.data.token, action.payload.data.userId);
      return state = {...state, loginRedirect: false};
    case LOGOUT:
    //logout user and clear local storage
      clearLocalStorage();
      return state = {...state, loginRedirect: false};
    default:
      return state;
  }
};