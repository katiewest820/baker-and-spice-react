import React from 'react';
import {shallow} from 'enzyme';
import {Register} from './register';
import '../../mock-localStorage';
import store from '../../store';

describe('<Register />', () => {
  it('Renders without crashing', () => {
    shallow(<Register localStorage={window.localStorage} store={store}/>);
  });
});