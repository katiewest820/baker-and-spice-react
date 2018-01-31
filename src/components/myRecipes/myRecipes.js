import React from 'react';

export default class MyRecipes extends React.Component{

  render(){
    return(
      <div>
        <h1>My Recipes</h1>
        <ul>
          <li>pizza</li>
          <li>pasta</li>
          <li>salad</li>
          <li>ice cream</li>
        </ul>
        <div className="searchMyRecipes">
          <label>Search My Recipes</label>
          <input type="text"/>
          <button>Search</button>
        </div>
      </div>
    )
  }
} 