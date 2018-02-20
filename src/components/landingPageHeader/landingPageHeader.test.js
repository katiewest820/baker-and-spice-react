import React from 'react';
import {shallow} from 'enzyme';
import LandingPageHeader from './landingPageHeader';

describe('<LandingPageHeader />', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPageHeader />);
  });
});