import React from 'react';
import Header from '../header/header';
import axios from 'axios';
import {API_BASE_URL} from '../../config';
import Toggle from 'react-toggle';
import './pantry.css';
import '../../../node_modules/react-toggle/style.css';

export default class Pantry extends React.Component{
  constructor(){
    super()
    this.state ={
      newPantryItem: '',
      pantryItems: []
    }
  }

  componentDidMount(){
    this.getPantryItemsFromDB()
  }

  getPantryItemsFromDB(){
    axios.get(`${API_BASE_URL}/pantry/allPantryItems`)
    .then((items) => {
      console.log(items.data)
      this.setState({pantryItems: items.data.data})
    })
    .catch((err) => {
      console.log(err)
    });
  }

  addPantryItem(e){
    e.preventDefault()
    this.setState({newPantryItem: e.target.value})
    console.log(this.state)
  }

  saveNewPantryItemToDB(){
   axios.post(`${API_BASE_URL}/pantry/newPantryItem`, {
    item: this.state.newPantryItem,
    inStock: true
   })
   .then((response) => {
    console.log(response)
    this.setState({newPantryItem: ''})
    this.getPantryItemsFromDB()
   })
   .catch((err) => {
    console.log(err)
   })
  }

  deletePantryItemFromDB(value){
    console.log(value)
    axios.delete(`${API_BASE_URL}/pantry/deletePantryItem/${value}`)
    .then((response) => {
      console.log(response)
      this.componentDidMount()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  toggleInStockValue(e){
    let itemId = e.target.value;
    let inStockStatus = e.target.checked;
    console.log(inStockStatus)
    axios.put(`${API_BASE_URL}/pantry/editOnePantryItem/${itemId}`, {
       inStock: inStockStatus
    })
    .then((response) => {
      console.log(response)
      this.getPantryItemsFromDB()
    })
    .catch((err) => {
      console.log(err)
    });
  }

  render(){
    let pantryItem;
    if(this.state.pantryItems.length > 0){
      pantryItem = this.state.pantryItems.map((item, index) => {
        console.log(item.inStock)
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
    return(
      <div>
        <Header />
        <div className="pantryList">
          <h1>Pantry List</h1>
          
            {pantryItem}
          
        </div>
        <div className="addPantryItem">
          <label>Add Item</label>
          <input value={this.state.newPantryItem} onChange={this.addPantryItem.bind(this)}type="text"/>
          <button onClick={this.saveNewPantryItemToDB.bind(this)}>Submit</button>
        </div>
      </div>
    )
  }
}