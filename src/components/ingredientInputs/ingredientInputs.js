import React from 'react';
import './ingredientInputs.css';
import IngredientList from '../ingredientList/ingredientList';
export default class IngredientInputs extends React.Component{
  constructor(props){
    super(props)
    this.state = this.getInitialState()
  }


  getInitialState(){
    return ({
      name: '',
      quantity: ''
    })
  }

  saveNewIngredient(e){
    this.setState({[e.target.name]: e.target.value})
  }

  updateParentAndClearInput(){
    console.log(this.state)
    this.props.onSubmit(this.state);
    this.setState(this.getInitialState())
  }
  
  render(){
    let ingredients;
    if(this.props.ingredients.length > 0){
      ingredients = this.props.ingredients.map((item, index) => {
        return(
          <IngredientList index={index} name={item.name} quantity={item.quantity} updateIngredient={this.props.updateIngredient}/>
        )
      })
    
    }

    return(
      <div className="ingredientInputDiv">
        <label>Ingredients</label>
        {ingredients}
        <input  value={this.state.name} onChange={this.saveNewIngredient.bind(this)} placeholder="Ingredient" name="name" type="text"/>
        <input  value={this.state.quantity} onChange={this.saveNewIngredient.bind(this)} placeholder="Quantity" name="quantity" type="text"/>
        <button onClick={this.updateParentAndClearInput.bind(this)}>Add</button>
      </div>
    )
  }
}