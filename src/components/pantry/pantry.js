import React from 'react';
import Header from '../header/header';
import {API_BASE_URL} from '../../config';
import Toggle from 'react-toggle';
import {connect} from 'react-redux';
import {getPantryItems, editPantryItem, deletePantryItem} from '../../actions/pantryActions';
import NewPantryItemForm from '../newPantryItemForm/newPantryItemForm';
import './pantry.css';
import '../../../node_modules/react-toggle/style.css';

export class Pantry extends React.Component{

  componentDidMount(){
    let userId = localStorage.getItem('userId');
    this.props.getPantryItems(`${API_BASE_URL}/pantry/allPantryItems/${userId}`);
  }

  deletePantryItemFromDB(value){
    if(!value){
      return;
    };
    this.props.deletePantryItem(`${API_BASE_URL}/pantry/deletePantryItem/${value}`);
  };

  toggleInStockValue(e){
    let itemId = e.target.value;
    let inStockStatus = e.target.checked;
    this.props.editPantryItem(`${API_BASE_URL}/pantry/editOnePantryItem/${itemId}`, inStockStatus);
  };

  render(){
    let pantryItem;
    let currentPantryItems = this.props.pantryItems;
    if(currentPantryItems.length > 0){
      pantryItem = currentPantryItems.map((item, index) => {
        return (
          <div className="eachPantryItem" key={index}>
            <p className="pantryItemName">{item.item}</p>
            <button className="pantryItemDelete" value={item._id} onClick={this.deletePantryItemFromDB.bind(this, item._id)}><i className="fas fa-trash-alt"></i></button>
            <Toggle
              checked={item.inStock}
              onChange={this.toggleInStockValue.bind(this)}
              className="red"
              value={item._id}
            />
          </div>  
        )
      });
    };
    return (
      <div>
        <Header />
        <div className="pantryList">
          <h1 className="pantryListHeader">Pantry List</h1>
          <NewPantryItemForm />
          <div className="pantryItemsDiv">
            <p className="inStockColor">In Stock = <span></span></p>
            <p className="outOfStockColor">Out of Stock = <span></span></p>
            {pantryItem}
          </div>
        </div>
      </div>
    )
  };
};

export const mapStateToProps = state => ({
  pantryItems: state.pantryReducers.pantryItems
});

export default connect(mapStateToProps, {getPantryItems, editPantryItem, deletePantryItem})(Pantry);