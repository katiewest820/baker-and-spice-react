import React from 'react';
import Header from '../header/header';
import axios from 'axios';
import {API_BASE_URL} from '../../config';
import {Link, Redirect} from 'react-router-dom';
import './recipeDetails.css';
import InStockValueDropDown from '../inStockValueDropDown/inStockValueDropDown';

export default class RecipeDetails extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        recipe: '',
        pantryItems: [],
        missingPantryItems: [],
        outOfStockItems: []
      }
  }

  componentDidMount(){
    this.apiCallForRecipe()
  }

  getPantryItemsFromDB(){
    axios.get(`${API_BASE_URL}/pantry/allPantryItems`)
    .then((items) => {
      console.log(items.data)
      this.setState({pantryItems: items.data.data})
      console.log(this.state.recipe.recipeIngredients)
      console.log(this.state.pantryItems)
      this.filterPantry()
    })
    .catch((err) => {
      console.log(err)
    });
  }

  apiCallForRecipe(){
    let recipeSlug = this.props.match.params.recipeSlug;
    axios.get(`${API_BASE_URL}/recipe/getRecipe/${recipeSlug}`)
    .then((response) => {
      console.log(response.data.data)
      this.setState({recipe: response.data.data})
      this.getPantryItemsFromDB()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  filterPantry(){
    let recipeItems = [];
    let pantryItems = [];
    let outOfStockItems = [];
    for(let i = 0; i < this.state.recipe.recipeIngredients.length; i++){
      recipeItems.push(this.state.recipe.recipeIngredients[i].name.trim())
    }
    for(let i = 0; i < this.state.pantryItems.length; i++){
      pantryItems.push(this.state.pantryItems[i].item.trim())
    }
    for(let i = 0; i < this.state.pantryItems.length; i++){
      if(this.state.pantryItems[i].inStock == false){
        outOfStockItems.push(this.state.pantryItems[i].item.trim())
      }
    }
    let matches = recipeItems.filter(name => pantryItems.indexOf(name) < 0)
    this.setState({missingPantryItems: matches})
    let outOfStockMatches = recipeItems.filter(name => outOfStockItems.indexOf(name) > -1)
    this.setState({outOfStockItems: outOfStockMatches})
    console.log(outOfStockMatches) 
  }

  addMissingItemToPantry(item, inStockValue){
    console.log(item)
    console.log(inStockValue)
    axios.post(`${API_BASE_URL}/pantry/newPantryItem`, {
      item: item,
      inStock: inStockValue
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
    let ingredients;
    let missingIngredient;
    if(this.state.recipe){
      ingredients = this.state.recipe.recipeIngredients.map((item, index) => {
        if(this.state.outOfStockItems.find((name) => { return name == item.name})){
          return (
            <div key={index}>
              <p className="outOfStock">*{item.name}</p>
              <p>{item.quantity}</p>
            </div>
          )
        }else{
          return (
            <div key={index}>
              <p className="inStock">{item.name}</p>
              <p>{item.quantity}</p>
            </div>
          )
        }
      })  
    }
    if(this.state.missingPantryItems.length > 0){
      missingIngredient = this.state.missingPantryItems.map((item, index) =>{
        return(
          <div key={index}>
            <p className="missingItem">{item}</p>
            <InStockValueDropDown item={item} onClick={this.addMissingItemToPantry.bind(this)}/>
          </div>
        )
      })
    }else{
      missingIngredient = <p>Nothing! You are all set to begin baking!</p>
    }
    return(
      <div>
        <Header />
        <div>
          <h2>{this.state.recipe.recipeTitle}</h2>
          <div>
            <h3>Instructions</h3>
            <p>{this.state.recipe.recipeInstructions}</p>
          </div>
          <div>  
            <h3>Ingredients</h3>
            {ingredients}
            <p>Pantry item is out of stock = <span className= "outOfStock">*</span> </p>
          </div>  
          <div>
            <h2>The following recipe ingredients are missing from your pantry:</h2>
            {missingIngredient}
          </div>
          <button>Edit</button>
          <Link to={"/deleteMsg/" + this.state.recipe.recipeSlug}><button>Delete</button></Link>
        </div>
      </div>
    )
  }
}

