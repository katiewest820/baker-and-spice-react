import React from 'react';
import {API_BASE_URL} from '../../config';
import {connect} from 'react-redux';
import {getAllRecipes, getOneRecipe, getRecipesBySearchTerm} from '../../actions/recipeActions';
import SearchMyRecipesForm from '../searchMyRecipesForm/searchMyRecipesForm';
import ImageGallery from 'react-image-gallery';
import {Link} from 'react-router-dom';
import './myRecipes.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

export class MyRecipes extends React.Component{

  componentDidMount(){
    let userId = localStorage.getItem('userId');
    this.props.getAllRecipes(`${API_BASE_URL}/recipe/getAllRecipes/${userId}`);
  };

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
  };

  render(){
    let recipe = [];
    //displays all recipes on page load
    if(this.props.allRecipes.length > 0 && this.props.finishedLoading){
      for(let i = 0; i < this.props.allRecipes.length; i++){
        let recipeImg = "/defaultRecipeImage.png";
        if(this.props.allRecipes[i].recipeImages !== 'undefined'){
          recipeImg = this.props.allRecipes[i].recipeImages;
        };
        recipe.push({
          original: recipeImg,
          thumbnail: recipeImg,
          description: this.props.allRecipes[i].recipeTitle,
          link: `/recipeDetails/${this.props.allRecipes[i].recipeSlug}`
        });
      };
      return(
        <div className="myRecipesDiv">
          <h1 className="myRecipesHeader">Your Recipes</h1>
          <SearchMyRecipesForm onClick={value => this.callDBforRecipesThatMatchSearchTerm(value)}/>
          <ImageGallery items={recipe} renderItem={this.onRecipeClick.bind(this)} />
        </div>
      )
    //displays if no recipes created yet
    }else if(this.props.allRecipes.length < 1 && this.props.finishedLoading){
      return(
        <div className="myRecipesDiv">
          <div className="noRecipesYetDiv">
            <img alt="logo" className="backgroundLogoImg" src="/defaultRecipeImage.png"/>
            <h2 className="noRecipesYet">Your recipes will display here. <br/>To begin building your first recipe click on <Link to="/newRecipe">New Recipe</Link></h2>
          </div>
        </div>
      )
    }else{
      return(null)
    }
  };
};

export const mapStateToProps = state => ({
  allRecipes: state.recipeReducers.allRecipes,
  oneRecipe: state.recipeReducers.oneRecipe,
  searchResults: state.recipeReducers.searchResults,
  finishedLoading: state.recipeReducers.finishedLoading
});

export default connect(mapStateToProps, {
  getAllRecipes, 
  getOneRecipe, 
  getRecipesBySearchTerm
})(MyRecipes);