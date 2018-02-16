import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, renderField} from '../../validators';

export class APIRecipeSearchForm extends React.Component{

  grabSearchTerm(value){
    window.location.href = `/ideaSearch/${value.searchTerm}`;
  }

  render(){
    return(
      <form className="inspirationSearchInput" onSubmit={this.props.handleSubmit(value => this.grabSearchTerm(value))}>
        <Field 
          type="text"
          name="searchTerm"
          component={renderField}
          validate={required}
        />
        <button type="submit">Search</button>
      </form>
    )
  };
};

export default reduxForm({
  form: 'apiRecipeSearch'
})(APIRecipeSearchForm);