import React from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config';
import {Link} from 'react-router-dom';

export default class MyRecipes extends React.Component{
  constructor(){
    super()

    this.state={
      isMounted: false,
      recipes: []
    }
  }

  componentDidMount(){
    console.log('hello')
    this.setState({isMounted: true});
    this.callDBForAllRecipes()
  }

  callDBForAllRecipes(){
    axios.get(`${API_BASE_URL}/recipe/getAllRecipes`)
    .then((response) => {
      let recipes = this.state.recipes
      if(this.state.isMounted){
        console.log(response.data.data)
      this.setState({recipes: response.data.data})
      }
      console.log(response)
      console.log(this.state)
      })

      .catch((err) => {
      console.log(err)
    })
  }

  componentWillUnmount(){
    this.setState({isMounted: false});
  }

  render(){
    let recipe;
    if(this.state.recipes){
      console.log(this.state)
        recipe = this.state.recipes.map((item, index) => {
         return (<div key={index}>
            <Link to={"/recipeDetails/" + item.recipeSlug}><h2>{item.recipeTitle}</h2></Link>
            <p>{item.recipeInstructions}</p>
          </div> )
        })
    }
    return(
      <div>
        <h1>My Recipes</h1>
        {recipe}
        <div className="searchMyRecipes">
          <label>Search My Recipes</label>
          <input type="text"/>
          <button>Search</button>
        </div>
      </div>
    )
  }
} 