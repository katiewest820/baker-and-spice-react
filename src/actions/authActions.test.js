import {LOGIN, login, LOGOUT, logout, REGISTER, register} from './authActions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios);

describe('login', () => {
  it('Should return the action', () => {
    const url = 'https://myfakeurl.com';
    const loginData = {userName: 'username', password: 'password'};
    const postRequest = mock.onPost(url).reply(200, loginData);
    const action = login(url, loginData);
    expect(action.type).toEqual(LOGIN);
    Promise.resolve(action.payload).then((value) => {
      expect(value.data.userName).toEqual('username');
      expect(value.status).toEqual(200);
    });
  });
});

describe('register', () => {
  it('Should return the action', () => {
    const url = 'https://myfakeurl.com';
    const registerData = {userName: 'username', password: 'password', firstName: 'first', lastName: 'last'};
    const postRequest = mock.onPost(url).reply(200, registerData);
    const action = register(url, registerData);
    expect(action.type).toEqual(REGISTER);
    Promise.resolve(action.payload).then((value) => {
      expect(value.data.userName).toEqual('username');
      expect(value.status).toEqual(200);
    });
  });
});

describe('logout', () => {
  it('Should return the action', () => {
    const action = logout();
    expect(action.type).toEqual(LOGOUT);
  });
});