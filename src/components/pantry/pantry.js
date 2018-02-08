import React from 'react';
import Header from '../header/header';
//import axios from 'axios';
import {API_BASE_URL} from '../../config';
import Toggle from 'react-toggle';
import {connect} from 'react-redux';
//import store from '../../store';
import {getPantryItems, editPantryItem, deletePantryItem} from '../../actions/pantryActions';
import NewPantryItemForm from '../newPantryItemForm/newPantryItemForm';
import './pantry.css';
import '../../../node_modules/react-toggle/style.css';


export class Pantry extends React.Component{

  componentDidMount(){
    let userId = localStorage.getItem('userId');
    this.props.getPantryItems(`${API_BASE_URL}/pantry/allPantryItems/${userId}`)
  }

  deletePantryItemFromDB(value){
    this.props.deletePantryItem(`${API_BASE_URL}/pantry/deletePantryItem/${value}`);
  }

  toggleInStockValue(e){
    let itemId = e.target.value;
    let inStockStatus = e.target.checked;
    this.props.editPantryItem(`${API_BASE_URL}/pantry/editOnePantryItem/${itemId}`, inStockStatus)
  }

  render(){
    let pantryItem;
    let currentPantryItems = this.props.pantryItems;
    console.log(currentPantryItems)
    if(currentPantryItems.length > 0){
      pantryItem = currentPantryItems.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.item}</p>
          <button value={item._id} onClick={e => this.deletePantryItemFromDB(e.target.value)}>Delete</button>
          <label>In Stock?</label>
          <Toggle
            checked={item.inStock}
            onChange={this.toggleInStockValue.bind(this)}
            className="red"
            value={item._id}
          />
        </div>  
      )
    });
  }
    return (
      <div>
        <Header />
        <div className="pantryList">
          <h1>Pantry List</h1>
          {pantryItem}
        </div>
        <NewPantryItemForm />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  pantryItems: state.pantryReducers.pantryItems
});

export default connect(mapStateToProps, {getPantryItems, editPantryItem, deletePantryItem})(Pantry);