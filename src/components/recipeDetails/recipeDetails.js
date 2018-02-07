import React from 'react';
import Header from '../header/header';
import axios from 'axios';
import {connect} from 'react-redux';
import store from '../../store';
import {API_BASE_URL} from '../../config';
import {Link, Redirect} from 'react-router-dom';
import {getPantryItems, submitNewPantryItem} from '../../actions/pantryActions';
import {getOneRecipe} from '../../actions/recipeActions';
import {missingPantryIngredients, outOfStockPantryIngredients} from '../../actions/filterIngredientsActions';
import './recipeDetails.css';
import InStockValueDropDown from '../inStockValueDropDown/inStockValueDropDown';

export class RecipeDetails extends React.Component{

  componentDidMount(){
    this.apiCallsForOneRecipeAndPantryItems()
  }

  apiCallsForOneRecipeAndPantryItems(){
    let recipeSlug = this.props.match.params.recipeSlug;
    Promise.all([
      this.props.getOneRecipe(`${API_BASE_URL}/recipe/getRecipe/${recipeSlug}`),
      this.props.getPantryItems(`${API_BASE_URL}/pantry/allPantryItems`)
    ]).then(() => {
      this.filterPantry()
    });
  }

  filterPantry(){
    let thisRecipeIngredientsDetails = this.props.oneRecipe.recipeIngredients;
    let currentPantryList = this.props.pantryItems;
    this.props.missingPantryIngredients(thisRecipeIngredientsDetails, currentPantryList);
  }

  addMissingItemToPantry(item, inStockValue){
    let newPantryItem;
    if(inStockValue == undefined){
      newPantryItem = {
        item: item,
        inStock: true
      }
    }else{
      newPantryItem = {
        item: item,
        inStock: inStockValue
      }
    }
    this.props.submitNewPantryItem(`${API_BASE_URL}/pantry/newPantryItem`, newPantryItem)
    .then(() => {
      this.filterPantry()
    });
  }
    
  render(){
    let thisRecipeDetails = this.props.oneRecipe
    let currentPantryList = this.props.pantryItems
    let missing = this.props.missingIngredients
    let outOfStock = this.props.outOfStockIngredients
    let ingredients;
    let missingIngredients;
    if(thisRecipeDetails.recipeIngredients){
      ingredients = thisRecipeDetails.recipeIngredients.map((item, index) => {
        if(outOfStock.find((name) => { return name == item.name})){
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
    if(missing.length > 0){
      missingIngredients = missing.map((item, index) =>{
        return(
          <div key={index}>
            <p className="missingItem">{item}</p>
            <InStockValueDropDown item={item} index={index} onClick={this.addMissingItemToPantry.bind(this)}/>
          </div>
        )
      })
    }else{
      missingIngredients = <p>Nothing! You are all set to begin baking!</p>
    }
    return(
      <div>
        <Header />
        <div>
          <h2>{thisRecipeDetails.recipeTitle}</h2>
          <div>
            <h3>Instructions</h3>
            <p>{thisRecipeDetails.recipeInstructions}</p>
          </div>
          <div>  
            <h3>Ingredients</h3>
            {ingredients}
            <p>Pantry item is out of stock = <span className= "outOfStock">*</span> </p>
          </div>  
          <div>
            <h2>The following recipe ingredients are missing from your pantry:</h2>
            {missingIngredients}
          </div>
          <button>Edit</button>
          <Link to={"/deleteMsg/" + thisRecipeDetails.recipeSlug}><button>Delete</button></Link>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  oneRecipe: state.recipeReducers.oneRecipe,
  pantryItems: state.pantryReducers.pantryItems,
  missingIngredients: state.filterIngredientsReducers.missing,
  outOfStockIngredients: state.filterIngredientsReducers.outOfStock
});

export default connect(mapStateToProps, {getOneRecipe, getPantryItems, submitNewPantryItem, missingPantryIngredients})(RecipeDetails);

