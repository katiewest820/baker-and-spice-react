import React from 'react';
import {API_BASE_URL} from '../../config';
import {connect} from 'react-redux';
import store from '../../store';
import {getAllRecipes, getOneRecipe, getRecipesBySearchTerm} from '../../actions/recipeActions';
import SearchMyRecipesForm from '../searchMyRecipesForm/searchMyRecipesForm';
import ImageGallery from 'react-image-gallery';
import './myRecipes.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

export class MyRecipes extends React.Component{

  componentDidMount(){
    let userId = localStorage.getItem('userId');
    console.log(userId)
    store.getState()
    this.props.getAllRecipes(`${API_BASE_URL}/recipe/getAllRecipes/${userId}`)
  }

  onRecipeClick(item){
     return (
      <div className='image-gallery-image'>
        <img 
          alt={item.description}
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
    //displays all recipes on page load
    if(this.props.allRecipes.length > 0){
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
        <div className="myRecipesDiv">
          <h1 className="myRecipesHeader">Your Recipes</h1>
          <ImageGallery items={recipe} renderItem={this.onRecipeClick.bind(this)} />
          <SearchMyRecipesForm onClick={value => this.callDBforRecipesThatMatchSearchTerm(value)}/>
        </div>
      )
    }
    return(null)
  }
}

export const mapStateToProps = state => ({
  allRecipes: state.recipeReducers.allRecipes,
  oneRecipe: state.recipeReducers.oneRecipe,
  searchResults: state.recipeReducers.searchResults
});

export default connect(mapStateToProps, {
  getAllRecipes, 
  getOneRecipe, 
  getRecipesBySearchTerm
})(MyRecipes);