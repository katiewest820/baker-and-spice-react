import React from 'react';
import {shallow} from 'enzyme';
import {NewPantryItemForm} from './newPantryItemForm';

describe('<NewPantryItemForm />', () => {
  it('Renders without crashing', () => {
    shallow(<NewPantryItemForm handleSubmit={() => {}}/>);
  });
});