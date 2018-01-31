import React from 'react';
import Header from '../header/header';
export default class Pantry extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <div className="pantryList">
          <h1>Pantry List</h1>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
            <li>item 7</li>
            <li>item 8</li>
          </ul>
        </div>
        <div className="addPantryItem">
          <label>Add Item</label>
          <input type="text"/>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}