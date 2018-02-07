import React from 'react';
import './ingredientInputs.css';
import IngredientList from '../ingredientList/ingredientList';
import {reduxForm, Field, reset} from 'redux-form';
import {newRecipeIngredientList} from '../../actions/recipeActions';
import {connect} from 'react-redux';

export class IngredientInputs extends React.Component{

  saveNewIngredient(value){
    this.props.dispatch(newRecipeIngredientList(value))
    this.props.dispatch(reset('ingredientInputs'))
  }
  
  render(){
    console.log(this.props.recipeIngredientList)
    let ingredients;
    if(this.props.recipeIngredientList.length > 0){
      console.log(this.props.recipeIngredientList)
       ingredients = this.props.recipeIngredientList.map((item, index) => {
        return(
          <IngredientList key={index} index={index} name={item.name} quantity={item.quantity} updateIngredient={this.props.updateIngredient}/>
        )
      })
    }

    return(
      <div className="ingredientInputDiv">
        <label>Ingredients</label>
        {ingredients}
        <form onSubmit={this.props.handleSubmit(value => this.saveNewIngredient(value))}>
          <Field 
           component="input"
           placeholder="Ingredient" 
           name="name" 
           type="text"
          />
          <Field 
           component="input"
           placeholder="Quantity" 
           name="quantity" 
           type="text"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipeIngredientList: state.recipeReducers.newRecipeIngredientList 
})

IngredientInputs = connect(mapStateToProps)(IngredientInputs)

export default reduxForm({
  form: 'ingredientInputs' 
})(IngredientInputs);