import reducer from './authReducers';
import {LOGIN} from '../actions/authActions';

describe('authReducers', () => {
  it('Should set initial state when nothing passed in', () => {
    expect(reducer(undefined, {})).toEqual({
      loginRedirect: false
    });
  });
  it('Should handle LOGIN action changes', () => {
    const updateAction = {
      type: LOGIN,
      payload: {data: {token: '123', userId: '123'}}
    }
    expect(reducer({}, updateAction)).toEqual({loginRedirect: true});
  });
});