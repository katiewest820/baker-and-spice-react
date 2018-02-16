import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import {submitNewPantryItem} from '../../actions/pantryActions';
import {API_BASE_URL} from '../../config';
import {required, renderField} from '../../validators';

export class NewPantryItemForm extends React.Component{

  saveNewPantryItemToDB(values){
     let pantryItem = {
       item: values.itemName,
       inStock: true
     };
     this.props.dispatch(submitNewPantryItem(`${API_BASE_URL}/pantry/newPantryItem`, pantryItem));
     this.props.dispatch(reset('pantry'));
  };

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(values=> this.saveNewPantryItemToDB(values))}>
        <Field 
          name="itemName"
          component={renderField}
          label="Add Item"
          type="text"
          validate={required}
        />
        <button className="newPantryItemButton" type="submit">Submit</button>
      </form>
    )
  };
};

export default reduxForm({
  form: 'pantry' 
})(NewPantryItemForm);
