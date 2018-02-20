import React from 'react';
import {shallow} from 'enzyme';
import DeleteMsg from './deleteMsg';
import store from '../../store';

describe('<DeleteMsg />', () => {
  it('Renders without crashing', () => {
    shallow(<DeleteMsg store={store} />);
  });
});