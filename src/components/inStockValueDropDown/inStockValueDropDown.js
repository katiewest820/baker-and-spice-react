import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';

export class InStockValueDropDown extends React.Component{
  
  updateInStockValue(e){
    let itemName = "item" + this.props.index
    this.props.onClick(this.props.item, e[itemName])
  }


  render(){
    return(
      <form onSubmit={this.props.handleSubmit(this.updateInStockValue.bind(this))}>
      <Field name={"item" + this.props.index} component="select" > 
        <option></option>
        <option value={true}>In Stock</option>
        <option value={false}>Out of Stock</option>
      </Field>
      <button type="submit">Add to Pantry </button>
      </form>  
    )
  }
}

export default reduxForm({
  form: 'inStockDropDown' 
})(InStockValueDropDown);
