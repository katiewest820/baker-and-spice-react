import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, renderField} from '../../validators';

export class AddIngredientToRecipe extends React.Component{

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(values => this.props.onClick(values))}>
        <Field
          type="text"
          name="name"
          placeholder="Item"
          label="Add Additional Ingredients"
          component={renderField} 
          validate={required}
        />
        <Field 
          type="text"
          name="quantity"
          placeholder="Quantity"
          component={renderField}
          validate={required}
        />
        <button type="submit" >Add</button>
      </form>
    )
  }
}



export default reduxForm({
  form: 'addIngredientToRecipe'
})(AddIngredientToRecipe);