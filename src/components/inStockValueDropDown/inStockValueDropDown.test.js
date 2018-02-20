import React from 'react';
import {shallow} from 'enzyme';
import {InStockValueDropDown} from './inStockValueDropDown';

describe('<InStockValueDropDown />', () => {
  it('Renders without crashing', () => {
    shallow(<InStockValueDropDown handleSubmit={() => {}}/>);
  });
});