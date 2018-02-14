import React from 'react';
import Header from '../header/header';
import {connect} from 'react-redux';
import {API_BASE_URL} from '../../config';
import {Link} from 'react-router-dom';
import {getPantryItems, submitNewPantryItem} from '../../actions/pantryActions';
import {getOneRecipe} from '../../actions/recipeActions';
import {missingPantryIngredients} from '../../actions/filterIngredientsActions';
import './recipeDetails.css';
import InStockValueDropDown from '../inStockValueDropDown/inStockValueDropDown';


export class RecipeDetails extends React.Component{

  componentDidMount(){
    let recipeSlug = this.props.match.params.recipeSlug;
    let userId = localStorage.getItem('userId')
    Promise.all([
      this.props.getOneRecipe(`${API_BASE_URL}/recipe/getRecipe/${userId}/${recipeSlug}`),
      this.props.getPantryItems(`${API_BASE_URL}/pantry/allPantryItems/${userId}`)
    ]).then(() => {
      this.filterPantry()
    });
  }

  filterPantry(){
    let thisRecipeIngredientsDetails = this.props.oneRecipe.recipeIngredients;
    let currentPantryList = this.props.pantryItems;
    console.log(this.props.oneRecipe)
    console.log(currentPantryList)
    this.props.missingPantryIngredients(thisRecipeIngredientsDetails, currentPantryList);
  }

  addMissingItemToPantry(item, inStockValue){
    let newPantryItem;
    if(inStockValue === undefined){
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
    let recipeImage;
    let missing = this.props.missingIngredients
    let outOfStock = this.props.outOfStockIngredients
    let ingredients;
    let missingIngredients;
    console.log(thisRecipeDetails)
    if(thisRecipeDetails.recipeImages !== 'undefined'){
      recipeImage = <img alt="" className="recipeImage" src={`//${window.location.hostname}:8080/images/${thisRecipeDetails.recipeImages}`} />
    }else{
      recipeImage = <img alt="" className="recipeImage" src={require('./defaultRecipeImage.png')}/>
    }
    if(thisRecipeDetails.recipeIngredients){
      ingredients = thisRecipeDetails.recipeIngredients.map((item, index) => {
        if(outOfStock.find((name) => { return name === item.name})){
          return (
            <div key={index}>
              <p className="bulletPoint">{item.quantity}</p>
              <p className="outOfStock">*{item.name}</p>
            </div>
          )
        }else{
          return (
            <div key={index}>
              <p className="bulletPoint">{item.quantity}</p>
              <p className="inStock">{item.name}</p>
            </div>
          )
        }
      })  
    } else{
      return null
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
      missingIngredients = <p>Nothing! You are all set to begin baking.</p>
    }
    return(
      <div>
        <Header />
        <div className="recipeDetailsMainDiv">
          <div className="recipeImageDiv">
            {recipeImage}
            <h2>{thisRecipeDetails.recipeTitle}</h2>
          </div>
          <div className="recipeDetailsBackgroundDiv">
            <div className="recipeIngredientsDiv"> 
              <h3>Ingredients</h3>
              <p className="outOfStockMsg">Pantry item is out of stock = <span className= "outOfStock">*</span></p>
              {ingredients}
            </div>
            <div className="recipeInstructionsDiv">
              <h3>Instructions</h3>
              <p>{thisRecipeDetails.recipeInstructions}</p>
            </div>
            <div className="recipeDetailsDeleteEditBtns">
              <Link to={"/editRecipe/" + thisRecipeDetails.recipeSlug}><button>Edit</button></Link>
              <Link to={"/deleteMsg/" + thisRecipeDetails.recipeSlug}><button>Delete</button></Link>
            </div>
          </div>  
          <div className="recipeMissingIngredientsDiv">
            <h3>The following recipe ingredients are missing from your pantry:</h3>
            {missingIngredients}
          </div>
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

