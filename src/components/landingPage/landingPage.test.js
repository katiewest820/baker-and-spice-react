import React from 'react';
import {shallow} from 'enzyme';
import {LandingPage} from './landingPage';
import '../../mock-localstorage';

describe('<LandingPage />', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPage localStorage={window.localStorage}/>);
  });
});