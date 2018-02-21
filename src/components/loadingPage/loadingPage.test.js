import React from 'react';
import {shallow} from 'enzyme';
import {LoadingPage} from './loadingPage';
import store from '../../store'; 

describe('<LoadingPage />', () => {
  it('Renders without crashing', () => {
    shallow(<LoadingPage store={store}/>);
  });
});