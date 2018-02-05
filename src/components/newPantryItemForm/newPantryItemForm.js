import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import {submitNewPantryItem} from '../../actions/pantryActions';
import {API_BASE_URL} from '../../config';

export class NewPantryItemForm extends React.Component{

  saveNewPantryItemToDB(values){
    console.log(values)
     let pantryItem = {
       item: values.itemName,
       inStock: true
     }
     this.props.dispatch(submitNewPantryItem(`${API_BASE_URL}/pantry/newPantryItem`, pantryItem))
     this.props.dispatch(reset('pantry'))
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(values=> this.saveNewPantryItemToDB(values))}>
        <label>Add Item</label>
        <Field 
          name="itemName"
          component="input"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'pantry' 
})(NewPantryItemForm);
