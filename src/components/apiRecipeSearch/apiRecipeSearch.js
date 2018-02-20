import React from 'react';
import Header from '../header/header';
//import {connect} from 'react-redux';
import './apiRecipeSearch.css';
import APIRecipeSearchForm from '../apiRecipeSearchForm/apiRecipeSearchForm';

export default class APIRecipeSearch extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div className="inspirationSearchDiv">
          <h2 className="newRecipeHeader">Need help getting started?</h2>
          <p className="searchInstructions">Search for recipes here! <br/> Enter an <span>Ingredient</span> or <span>Recipe</span> name in the field below</p>
          <APIRecipeSearchForm />
        </div>
      </div>
    )
  };
};

//export default connect()(APIRecipeSearch);
