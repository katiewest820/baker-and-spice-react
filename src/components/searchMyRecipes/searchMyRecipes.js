import React from 'react';
import {connect} from 'react-redux';
import {getRecipesBySearchTerm} from '../../actions/recipeActions';
import ImageGallery from 'react-image-gallery';
import {API_BASE_URL} from '../../config';
import {reset} from 'redux-form';
import Header from '../header/header';
import SearchMyRecipesForm from '../searchMyRecipesForm/searchMyRecipesForm';
import './searchMyRecipes.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

export class SearchMyRecipes extends React.Component{

  componentDidMount(){
    if(this.props.match.params.searchTerm){
      this.callDBforRecipesThatMatchSearchTerm(this.props.match.params.searchTerm)
    }
  }

  callDBforRecipesThatMatchSearchTerm(values){
    let userId = localStorage.getItem('userId');
    console.log(userId)
    console.log(values)
    let searchTerm = values.trim().toLowerCase();
    this.props.getRecipesBySearchTerm(`${API_BASE_URL}/recipe/getRecipesBySearchTerm/${userId}/${searchTerm}`);
    this.props.reset('searchMyRecipes')
  }

  onSearchedRecipeClick(item){
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
    let errorMsg;
    let searchRecipe = [];
    console.log(this.props.searchResults)
    if(this.props.errorMsg.length > 0){
      console.log(this.props.errorMsg)
      errorMsg = <h2 className="searchMyRecipesErrorMessage">{this.props.errorMsg}</h2>
      return(
        <main>
          <Header />
          <div>
            <h1 className="myRecipesHeader">Your Recipes</h1>
            {errorMsg}
            <SearchMyRecipesForm onClick={value => this.callDBforRecipesThatMatchSearchTerm(value)}/>
          </div>
        </main>
      )
    }
    else if(this.props.searchResults.length > 0){
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
        <main>
          <Header />
          <div>
            <h1 className="myRecipesHeader">Your Recipes</h1>
            {errorMsg}
            <ImageGallery items={searchRecipe} renderItem={this.onSearchedRecipeClick.bind(this)} />
            <SearchMyRecipesForm onClick={value => this.callDBforRecipesThatMatchSearchTerm(value)}/>
          </div>
        </main>
      )
    }
    else{
      return( null )
    }
  }
}


export const mapStateToProps = state => ({
  searchResults: state.recipeReducers.searchResults,
  errorMsg: state.recipeReducers.errorMsg,
});

export default connect(mapStateToProps, {getRecipesBySearchTerm, reset})(SearchMyRecipes);