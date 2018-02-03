import React from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config';
import {Link} from 'react-router-dom';

export default class MyRecipes extends React.Component{
  constructor(){
    super()

    this.state={
      recipes: [],
      recipeSearchInput: ''
    }
  }

  componentDidMount(){
    this.callDBForAllRecipes()
  }

  callDBForAllRecipes(){
    axios.get(`${API_BASE_URL}/recipe/getAllRecipes`)
    .then((response) => {
      let recipes = this.state.recipes
      this.setState({recipes: response.data.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  //TODO layout for search results????? 
  setValueOfSearchInput(e){
    this.setState({recipeSearchInput: e.target.value})
    console.log(this.state.recipeSearchInput)
  }

  callDBforOneRecipe(e){
    e.preventDefault()
    let searchTerm = this.state.recipeSearchInput.trim().split(' ').join('-')
    console.log(searchTerm)
    axios.get(`${API_BASE_URL}/recipe/getRecipe/${searchTerm}`)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  render(){
    let recipe;
    if(this.state.recipes){
      console.log(this.state)
      recipe = this.state.recipes.map((item, index) => {
       return (<div key={index}>
          <Link to={"/recipeDetails/" + item.recipeSlug}><h2>{item.recipeTitle}</h2></Link>
        </div> )
      })
    }
    return(
      <div>
        <h1>My Recipes</h1>
        {recipe}
        <div className="searchMyRecipes">
          <label>Search Your Recipes</label>
          <input value={this.state.recipeSearchInput} onChange={this.setValueOfSearchInput.bind(this)} type="text"/>
          <button onClick={this.callDBforOneRecipe.bind(this)}>Search</button>
        </div>
      </div>
    )
  }
} 