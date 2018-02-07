import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';

export const required = value => value ? undefined : 'Required';
export class SearchMyRecipesForm extends React.Component{

  render(){
    //TODO Required message for no input
    return(
      <form className="searchMyRecipes" onSubmit={this.props.handleSubmit(value => this.props.onClick(value))}>    
        <label>Search Your Recipes</label>
        <Field 
          name="myRecipeSearch"
          type="text"
          component="input"
          validate={[required]}
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'searchMyRecipes' 
})(SearchMyRecipesForm);