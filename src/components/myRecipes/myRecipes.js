import React from 'react';
//import axios from 'axios';
import {API_BASE_URL} from '../../config';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
//import store from '../../store';
import {reset} from 'redux-form';
import {getAllRecipes, getOneRecipe} from '../../actions/recipeActions';
import SearchMyRecipesForm from '../searchMyRecipesForm/searchMyRecipesForm';

export class MyRecipes extends React.Component{

  componentDidMount(){
    let userId = localStorage.getItem('userId');
    console.log(userId)
    
    this.props.getAllRecipes(`${API_BASE_URL}/recipe/getAllRecipes/${userId}`)
  }
 
  callDBforOneRecipe(values){
    let userId = localStorage.getItem('userId');
    console.log(userId)
    console.log(values)
    let searchTerm = values.myRecipeSearch.trim().toLowerCase().split(' ').join('-')
    this.props.getOneRecipe(`${API_BASE_URL}/recipe/getRecipe/${userId}/${searchTerm}`);
    this.props.reset('searchMyRecipes')
  }

  render(){
    let recipe;
    //displays error message
    if(this.props.errorMsg.length > 0){
      recipe = <h2>{this.props.errorMsg}</h2>
    }
    //displays one recipe after searched for
    else if(this.props.oneRecipe.recipeTitle){
      recipe = 
      <div>
        <Link to={"/recipeDetails/" + this.props.oneRecipe.recipeSlug}>
        <h2>{this.props.oneRecipe.recipeTitle}</h2>
        </Link>
      </div>
    }
    //displays all recipes on page load
    else if(this.props.allRecipes.length > 0){
      recipe = this.props.allRecipes.map((item, index) => {
       return (<div key={index}>
          <Link to={"/recipeDetails/" + item.recipeSlug}><h2>{item.recipeTitle}</h2></Link>
        </div> )
      })
    }
    return(
      <div>
        <h1>My Recipes</h1>
        {recipe}
        <SearchMyRecipesForm onClick={value => this.callDBforOneRecipe(value)}/>
      </div>
    )
  }
} 

export const mapStateToProps = state => ({
  allRecipes: state.recipeReducers.allRecipes,
  oneRecipe: state.recipeReducers.oneRecipe,
  errorMsg: state.recipeReducers.errorMsg
});

export default connect(mapStateToProps, {getAllRecipes, getOneRecipe, reset})(MyRecipes);