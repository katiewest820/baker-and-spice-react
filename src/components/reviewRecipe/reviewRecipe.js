import React from 'react';
import './reviewRecipe.css';
export default class ReviewRecipe extends React.Component{

  render(){
    return(
      <div className="reviewRecipeDiv">
        <h2>Review and Submit Recipe</h2>
        <div className="reviewAllDetails">
          <h3>Name</h3>
          <h3>Images</h3>
          <h3>Ingredients</h3>
          <ul>
            <li>ingredient 1</li>
            <li>ingredient 2</li>
            <li>ingredient 3</li>
            <li>ingredient 4</li>
          </ul>
          <h3>Instructions</h3>
          <p>word words words words word words words words word words words words word words words words word words words</p>
        </div>
        <button>Submit Recipe</button>
      </div>
    )
  }
}