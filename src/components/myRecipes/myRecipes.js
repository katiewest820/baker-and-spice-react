import React from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import store from '../../store';
import {getAllRecipes, getOneRecipe} from '../../actions/recipeActions';

export class MyRecipes extends React.Component{
  constructor(){
    super()
    this.state={
      recipes: [],
      recipeSearchInput: ''
    }
  }

  componentDidMount(){
    this.props.getAllRecipes(`${API_BASE_URL}/recipe/getAllRecipes`)
  }

  //TODO layout for search results????? 
  setValueOfSearchInput(e){
    this.setState({recipeSearchInput: e.target.value})
    console.log(this.state.recipeSearchInput)
  }

  callDBforOneRecipe(e){
    e.preventDefault();
    let searchTerm = this.state.recipeSearchInput.trim().split(' ').join('-')
    this.props.getOneRecipe(`${API_BASE_URL}/recipe/getRecipe/${searchTerm}`)
    
    
    // console.log(searchTerm)
    // axios.get(`${API_BASE_URL}/recipe/getRecipe/${searchTerm}`)
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((err) => {
    //   console.log(err)
    // });
  }

  render(){
    let recipe;
    if(this.props.allRecipes.length > 0){
      console.log(this.props.allRecipes)
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
        <div className="searchMyRecipes">
          <label>Search Your Recipes</label>
          <input value={this.state.recipeSearchInput} onChange={this.setValueOfSearchInput.bind(this)} type="text"/>
          <button onClick={this.callDBforOneRecipe.bind(this)}>Search</button>
        </div>
      </div>
    )
  }
} 

export const mapStateToProps = state => ({
  allRecipes: state.recipeReducers.allRecipes
});

export default connect(mapStateToProps, {getAllRecipes, getOneRecipe})(MyRecipes);