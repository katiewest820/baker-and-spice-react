import React from 'react';
import './ingredientInputs.css';
import IngredientList from '../ingredientList/ingredientList';
import {reduxForm, Field, reset} from 'redux-form';
import {addIngredientToRecipe} from '../../actions/recipeActions';
import {connect} from 'react-redux';
import {required, renderField} from '../../validators';

export class IngredientInputs extends React.Component{

  saveNewIngredient(value){
    let newItem = [];
    newItem.push(value);
    this.props.dispatch(addIngredientToRecipe(value));
    this.props.dispatch(reset('ingredientInputs'));
  }
  
  render(){
    let ingredients;
    if(this.props.recipeIngredientList.length > 0){
      ingredients = this.props.recipeIngredientList.map((item, index) => {
        return(
          <IngredientList key={index} index={index} name={item.name} quantity={item.quantity} deleteIngredientFromRecipe={this.props.deleteIngredientFromRecipe} updateIngredient={this.props.updateIngredient}/>
        )
      });
    };
    return(
      <div className="ingredientInputDiv">
        <label>Ingredients</label>
        {ingredients}
        <form className="newRecipeIngredient" onSubmit={this.props.handleSubmit(value => this.saveNewIngredient(value))}>
          <Field 
           component={renderField}
           placeholder="Item" 
           name="name" 
           type="text"
           validate={required}
          />
          <Field 
           component={renderField}
           placeholder="Quantity" 
           name="quantity" 
           type="text"
           validate={required}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  };
};

const mapStateToProps = state => ({
  recipeIngredientList: state.recipeReducers.newRecipeIngredientList 
});

IngredientInputs = connect(mapStateToProps)(IngredientInputs);

export default reduxForm({
  form: 'ingredientInputs' 
})(IngredientInputs);