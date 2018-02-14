import {LOGIN, REGISTER, LOGOUT} from '../actions/authActions';
import {saveAuthTokenAndUserId, clearLocalStorage} from '../local-storage';

const initialState = {
  errorMsg: '',
  loginRedirect: false
}

export default(state=initialState, action) => {
  switch(action.type){
    case LOGIN:
      if(action.payload.request.response === 'user does not exist'){
        return state = {...state, errorMsg: 'Please enter a valid username and password', loginRedirect: false}
      }
      else if(action.payload.request.response === 'wrong password'){
        return state = {...state, errorMsg: 'Incorrect password, please try again', loginRedirect: false}
      }
      else{
        saveAuthTokenAndUserId(action.payload.data.token, action.payload.data.userId)
        return state = {...state, errorMsg: '', loginRedirect: true}
      }
    case REGISTER:
    let responseJson = JSON.parse(action.payload.request.response)
    console.log(responseJson)
      if(responseJson.message === 'An account already exists with this username'){
        return state = {...state, errorMsg: 'Username already in use, please try again', loginRedirect: false}
      }
      else{
        saveAuthTokenAndUserId(action.payload.data.token, action.payload.data.userId)
        return state = {...state, errorMsg: '', loginRedirect: false}
      }
    case LOGOUT:
      console.log(state)
      console.log(action)
      clearLocalStorage()
      return state = {...state, loginRedirect: false, errorMsg: '', token: ''}
    default:
      return state
  }
}