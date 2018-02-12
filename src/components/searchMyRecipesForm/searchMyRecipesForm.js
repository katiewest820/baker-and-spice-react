import React from 'react';
import {reduxForm, Field} from 'redux-form';
//import {Link} from 'react-router-dom';
import './searchMyRecipesForm.css';
import {required, renderField} from '../../validators';

export class SearchMyRecipesForm extends React.Component{

 grabSearchTerm(value){
  console.log(value)
  window.location.href = `/search/${value.myRecipeSearch}`;
 }

  render(){
    return(
      <form className="searchMyRecipes" onSubmit={this.props.handleSubmit(value => this.grabSearchTerm(value))}>    
        <Field 
          name="myRecipeSearch"
          type="text"
          component={renderField}
          label="Search Your Recipes"
          validate={required}
        />
        <button type="submit" disabled={this.props.submitting}>Search</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'searchMyRecipes'
})(SearchMyRecipesForm);