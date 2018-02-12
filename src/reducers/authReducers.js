import axios from 'axios';
import {LOGIN, REGISTER, LOGOUT} from '../actions/authActions';
import {saveAuthTokenAndUserId, clearLocalStorage} from '../local-storage';

const initialState = {
  errorMsg: '',
  loginRedirect: false
}

export default(state=initialState, action) => {
  switch(action.type){
    case LOGIN:
    console.log(state)
    console.log(action)
      if(action.payload.request.response === 'user does not exist'){
        return state = {...state, errorMsg: 'Please enter a valid username and password', loginRedirect: false}
      }
      if(action.payload.request.response === 'wrong password'){
        return state = {...state, errorMsg: 'Incorrect password, please try again', loginRedirect: false}
      }
      if(action.payload.request.response === 'username and password required'){
        return state = {...state, errorMsg: 'A username and password are requred to login', loginRedirect: false}
      }
//axios.defaults.headers.common['Authorization'] = action.payload.data.token;
      saveAuthTokenAndUserId(action.payload.data.token, action.payload.data.userId)
      return state = {...state, errorMsg: '', loginRedirect: true}
    case REGISTER:
    console.log(state)
    console.log(action)
      if(action.payload.request.response === 'An account already exists with this username'){
        return state = {...state, errorMsg: 'Username already in use, please try again', loginRedirect: false}
      }
      if(action.payload.request.response === 'username required'){
        return state = {...state, errorMsg: 'Please enter a username', loginRedirect: false}
      }
      if(action.payload.request.response === 'password required'){
        return state = {...state, errorMsg: 'Please enter a password', loginRedirect: false}
      }
      if(action.payload.request.response === 'first and last name required'){
        return state = {...state, errorMsg: 'Please enter a first and last name', loginRedirect: false}
      }
      saveAuthTokenAndUserId(action.payload.data.token, action.payload.data.userId)
      return state = {...state, errorMsg: '', loginRedirect: false}
    case LOGOUT:
      console.log(state)
      console.log(action)
//delete axios.defaults.headers.common["Authorization"]; 
      clearLocalStorage()
      return state = {...state, loginRedirect: false, errorMsg: '', token: ''}
    default:
      return state
  }
}