import React from 'react';
import './ingredientList.css'
export default class IngredientList extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
   
  }
  

  componentDidUpdate(){
    console.log(this.props.ingredientList)
  }

  render(){
    return(
      <div className="ingredientList"> 
        <input value={this.props.name} onChange={event => this.props.updateIngredient(event.target, this.props.index)} placeholder="Ingredient" name="name" type="text"/>
        <input value={this.props.quantity}  onChange={event => this.props.updateIngredient(event.target, this.props.index)} placeholder="Quantity" name="quantity" type="text"/>
      </div>  
    )
  }
} 