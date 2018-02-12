import React from 'react';
import Header from '../header/header';
import {connect} from 'react-redux';
import './apiRecipeSearch.css';
import APIRecipeSearchForm from '../apiRecipeSearchForm/apiRecipeSearchForm';


export class APIRecipeSearch extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <div className="inspirationSearchDiv">
          <h2>Need help getting started?</h2>
          <p>Search for recipes here! <br/> Enter an ingredient or recipe name in the field below</p>
          <APIRecipeSearchForm />
        </div>
      </div>
    )
  }
}

export default connect()(APIRecipeSearch);