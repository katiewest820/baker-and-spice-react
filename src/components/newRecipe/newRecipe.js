import React from 'react';
import Header from '../header/header';
import IngredientInputs from '../ingredientInputs/ingredientInputs';
import './newRecipe.css';
export default class NewRecipe extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      recipeTitle: '',
      recipeInstructions: '',
      recipeIngredients: []
    }
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  handleChangeInput(e){
    this.setState({[e.target.name]: e.target.value});
  }

  addIngredient(value){
    let recipeIngredientsArr = this.state.recipeIngredients;
      this.setState({recipeIngredients: [...recipeIngredientsArr, {name: value.name, quantity: value.quantity}] });
  }

  updateIngredient(target, index){
    console.log(target)
    console.log(index)
    let updatedArr = this.state.recipeIngredients.slice();
    updatedArr[index][target.name] = target.value;
    console.log(updatedArr)
    this.setState({recipeIngredients: updatedArr})
  }


  render(){
    return(
        <div>
          <Header />
          <div className="newRecipeDiv">
            <h2>Create Your Recipe</h2>
            <div>
              <label>Recipe Name</label>
              <input value={this.state.recipeTitle} onChange={this.handleChangeInput.bind(this)} name="recipeTitle" type="text"/>
            </div>
            <div className="imgInputDiv">
              <label>Images</label>
              <input name="file" type="file" />
            </div>
            <IngredientInputs ingredients={this.state.recipeIngredients} onSubmit={this.addIngredient.bind(this)} updateIngredient={this.updateIngredient.bind(this)}/>
            <div>
              <label>Instructions</label>
              <textarea value={this.state.recipeInstructions} onChange={this.handleChangeInput.bind(this)} name="recipeInstructions" className="instructionsInput" type="text"></textarea>
            </div> 
            <button>Submit Recipe</button> 
          </div>
        </div>
      )
  }
}