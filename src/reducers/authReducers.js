import {LOGIN, REGISTER, LOGOUT} from '../actions/authActions';
import {saveAuthTokenAndUserId, clearLocalStorage} from '../local-storage';

const initialState = {
  errorMsg: '',
  loginRedirect: false
};

export default(state=initialState, action) => {
  if(action.error) {
    return state;
  }

  switch(action.type){
    case LOGIN:
        saveAuthTokenAndUserId(action.payload.data.token, action.payload.data.userId)
        return state = {...state, errorMsg: '', loginRedirect: true}
    case REGISTER:
        saveAuthTokenAndUserId(action.payload.data.token, action.payload.data.userId)
        return state = {...state, errorMsg: '', loginRedirect: false}
    case LOGOUT:
      clearLocalStorage();
      return state = {...state, loginRedirect: false, errorMsg: '', token: ''}
    default:
      return state
  }
}