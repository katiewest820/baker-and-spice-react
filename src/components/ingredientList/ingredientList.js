import React from 'react';
import './ingredientList.css'
export default class IngredientList extends React.Component{

  render(){
    return(
      <div className="ingredientList"> 
        <input value={this.props.name} onChange={event => this.props.updateIngredient(event.target.value, event.target.name, this.props.index)} placeholder="Ingredient" name="name" type="text"/>
        <input value={this.props.quantity}  onChange={event => this.props.updateIngredient(event.target.value, event.target.name, this.props.index)} placeholder="Quantity" name="quantity" type="text"/>
        <button value={this.props.quantity} onClick={event => this.props.deleteIngredientFromRecipe(event.target.value, this.props.name, this.props.index)}>Delete</button>
      </div>  
    )
  }
} 