import React from 'react';
import Header from '../header/header';
import RecipeInspirationResults from '../recipeInspirationResults/recipeInspirationResults';
import './recipeInspiration.css';
export default class RecipeInspiration extends React.Component{
  
  render(){
    return(
      <div>
        <Header />
        <div className="inspirationSearchDiv">
          <h2>Need help getting started?</h2>
          <p>Search for recipes here! <br/> Enter an ingredient or recipe name in the field below</p>
          <div className="inspirationSearchInput">
            <input type="text"/>
            <button>Search</button>
          </div>
        </div>
        <RecipeInspirationResults />
      </div>
    )
  }
}