import React from 'react';
import {reduxForm, Field} from 'redux-form';

export class AddIngredientToRecipe extends React.Component{

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(values => this.props.onClick(values))}>
      <label>Add More Ingredients</label>
        <Field
          type="text"
          name="name"
          component="input" 
        />
        <Field 
          type="text"
          name="quantity"
          component="input"
        />
        <button type="submit" >Add</button>
      </form>
    )
  }
}



export default reduxForm({
  form: 'addIngredientToRecipe'
})(AddIngredientToRecipe);