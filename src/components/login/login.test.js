import React from 'react';
import {shallow} from 'enzyme';
import {Login} from './login';
import store from '../../store';
import '../../mock-localStorage';

describe('<Login />', () => {
  it('Renders without crashing', () => {
    shallow(<Login localStorage={window.localStorage} store={store} handleSubmit={() => {}}/>);
  });
});