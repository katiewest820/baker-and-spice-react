import React from 'react';
import Header from '../header/header';
import axios from 'axios';
import {API_BASE_URL} from '../../config';


export default class RecipeDetails extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        recipe: ''
      }
  }

  componentDidMount(){
    this.apiCallForRecipe()
  }

  apiCallForRecipe(){
    let recipeSlug = this.props.match.params.recipeSlug;
    axios.get(`${API_BASE_URL}/recipe/getRecipe/${recipeSlug}`)
    .then((response) => {
      console.log(response)
      this.setState({recipe: response.data.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }


  render(){
    let ingredients;
    if(this.state.recipe){
      console.log('yes')
      ingredients = this.state.recipe.recipeIngredients.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
          </div>
        )
      })
    }
    return(
      <div>
        <Header />
        <div>
          <h2>{this.state.recipe.recipeTitle}</h2>
          <h3>Instructions</h3>
          <p>{this.state.recipe.recipeInstructions}</p>
          {ingredients}
        </div>
      </div>
    )
  }
}