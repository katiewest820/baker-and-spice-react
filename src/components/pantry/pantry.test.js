import React from 'react';
import {shallow} from 'enzyme';
import {Pantry} from './pantry';
import '../../mock-localStorage';
import store from '../../store';

describe('<Pantry />', () => {
  let pantryItems = [];
  for(let i = 0; i < 10; i++){
    pantryItems.push({item: `item ${i}`, _id: `123${i}`, inStock: true})
  }

  it('Renders without crashing', () => {
    shallow(<Pantry 
      localStorage={window.localStorage} 
      store={store} 
      pantryItems={pantryItems} 
      getPantryItems={() => {}}
    />);
  });
});