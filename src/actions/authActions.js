//import jwtDecode from 'jwt-decode';
//import {SubmissionError} from 'redux-form';
//import {API_BASE_URL} from '../config';
import axios from 'axios';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT'


export function login(url, loginData){
  const request = axios.post(url, {
    userName: loginData.userName,
    password: loginData.password
  });
  return {
    type: LOGIN,
    payload: request
  };
};

export function register(url, registerData){
  const request = axios.post(url, {
    firstName: registerData.firstName,
    lastName: registerData.lastName,
    userName: registerData.userName,
    password: registerData.password
  });
  return{
    type: REGISTER,
    payload: request
  };
};

export const logout = () => {
  type: LOGOUT
};