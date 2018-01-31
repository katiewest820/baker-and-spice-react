import React from 'react';
import './recipeInspirationResults.css';
export default class RecipeInspirationResults extends React.Component{

  render(){
    return(
      <div className="recipeInspirationResults">
        <h2>Results</h2>
        <div>
          <p>Recipe 1</p>
          <p>Recipe 2</p>
          <p>Recipe 3</p>
          <p>Recipe 4</p>
        </div>
      </div>
    )
  }
}