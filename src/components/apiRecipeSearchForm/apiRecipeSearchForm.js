import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './apiRecipeSearchForm.css';
import {required, renderField} from '../../validators';

export class APIRecipeSearchForm extends React.Component{

  grabSearchTerm(value){
    console.log(value)
    window.location.href = `/ideaSearch/${value.searchTerm}`;
 }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(value => this.grabSearchTerm(value))} className="inspirationSearchInput">
        <Field 
          type="text"
          name="searchTerm"
          component={renderField}
          validate={required}
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'apiRecipeSearch'
})(APIRecipeSearchForm);