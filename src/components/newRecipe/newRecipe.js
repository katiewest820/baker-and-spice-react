import React from 'react';
import Header from '../header/header';
import ReviewRecipe from '../reviewRecipe/reviewRecipe';
import './newRecipe.css';
export default class NewRecipe extends React.Component{

  render(){
    return(
        <div>
          <Header />
          <div className="newRecipeDiv">
            <h2>Create Your Recipe</h2>
            <div>
              <label>Recipe Name</label>
              <input name="recipe name" type="text"/>
              <button>Add</button>
            </div>
            <div className="imgInputDiv">
              <label>Images</label>
              <input name="file" type="file" />
            </div>
            <div>
              <label>Ingredient</label>
              <input name="ingredeient" type="text"/>
              <label>Quantity</label>
              <input name="quantity" type="text"/>
              <button>Add</button>
            </div>
            <div>
              <label>Instructions</label>
              <input name="instructions" className="instructionsInput" type="text" />
              <button>Add</button>
            </div>  
          </div>
          <ReviewRecipe />
        </div>
      )
  }
}