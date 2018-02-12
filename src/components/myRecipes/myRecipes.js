import React from 'react';
//import axios from 'axios';
import {API_BASE_URL} from '../../config';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import store from '../../store';
import {reset} from 'redux-form';
import {getAllRecipes, getOneRecipe, getRecipesBySearchTerm} from '../../actions/recipeActions';
import SearchMyRecipesForm from '../searchMyRecipesForm/searchMyRecipesForm';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

export class MyRecipes extends React.Component{

  componentDidMount(){
    let userId = localStorage.getItem('userId');
    console.log(userId)
    store.getState()
    this.props.getAllRecipes(`${API_BASE_URL}/recipe/getAllRecipes/${userId}`)
  }
 
  callDBforRecipesThatMatchSearchTerm(values){
    let userId = localStorage.getItem('userId');
    console.log(userId)
    console.log(values)
    let searchTerm = values.myRecipeSearch.trim().toLowerCase();
    this.props.getRecipesBySearchTerm(`${API_BASE_URL}/recipe/getRecipesBySearchTerm/${userId}/${searchTerm}`);
    this.props.reset('searchMyRecipes')
  }

  onRecipeClick(item){
    if(item.original == undefined){
      console.log('yesssss')
    }
     return (
      <div className='image-gallery-image'>
        <img
          src={item.original}
        />
        {
          item.description && item.link && 
          <a className='image-gallery-description hoverStyle' href={item.link}>
            {item.description}
          </a>   
        }
      </div>
    )
  }

  render(){
    let recipe = [];
    let searchRecipe = [];
    let errorMsg;
    //displays error message
    if(this.props.errorMsg.length > 0){
      console.log(this.props.errorMsg)
      errorMsg = <h2>{this.props.errorMsg}</h2>
    }
    //displays one recipe after searched for
    else if(this.props.searchResults.length > 0){
      console.log(this.props.searchResults)
        for(let i = 0; i < this.props.searchResults.length; i++){
        let recipeImg = require('../recipeDetails/defaultRecipeImage.png');
        if(this.props.searchResults[i].recipeImages !== 'undefined'){
          recipeImg = `//${window.location.hostname}:8080/images/${this.props.searchResults[i].recipeImages}`
        }
        searchRecipe.push({
          original: recipeImg,
          thumbnail: recipeImg,
          description: this.props.searchResults[i].recipeTitle,
          link: `/recipeDetails/${this.props.searchResults[i].recipeSlug}`
        })
      }
      return(
        <div>
          <h1>My Recipes</h1>
          <ImageGallery items={searchRecipe} renderItem={this.onRecipeClick.bind(this)} />
          <SearchMyRecipesForm onClick={value => this.callDBforRecipesThatMatchSearchTerm(value)}/>
        </div>
      )
     }
    //   recipe = 
    //   <div>
    //     <Link to={"/recipeDetails/" + this.props.oneRecipe.recipeSlug}>
    //     <h2>{this.props.oneRecipe.recipeTitle}</h2>
    //     </Link>
    //   </div>
    // }
    //displays all recipes on page load
    else if(this.props.allRecipes.length > 0){
      console.log(this.props.allRecipes)
      for(let i = 0; i < this.props.allRecipes.length; i++){
        let recipeImg = require('../recipeDetails/defaultRecipeImage.png');
        if(this.props.allRecipes[i].recipeImages !== 'undefined'){
          recipeImg = `//${window.location.hostname}:8080/images/${this.props.allRecipes[i].recipeImages}`
        }
        recipe.push({
          original: recipeImg,
          thumbnail: recipeImg,
          description: this.props.allRecipes[i].recipeTitle,
          link: `/recipeDetails/${this.props.allRecipes[i].recipeSlug}`
        })
      }
      return(
        <div>
          <h1>My Recipes</h1>
          <ImageGallery items={recipe} renderItem={this.onRecipeClick.bind(this)} />
          <SearchMyRecipesForm onClick={value => this.callDBforRecipesThatMatchSearchTerm(value)}/>
        </div>
      )
    }
    return(
      <div>
        <SearchMyRecipesForm onClick={value => this.callDBforRecipesThatMatchSearchTerm(value)}/>
        {recipe}
        {errorMsg}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  allRecipes: state.recipeReducers.allRecipes,
  oneRecipe: state.recipeReducers.oneRecipe,
  errorMsg: state.recipeReducers.errorMsg,
  searchResults: state.recipeReducers.searchResults
});

export default connect(mapStateToProps, {
  getAllRecipes, 
  getOneRecipe, 
  getRecipesBySearchTerm, 
  reset 
})(MyRecipes);