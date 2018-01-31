import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
export default class Header extends React.Component{

  render(){
    return(
      <header className="mainHeader">
        <Link to="/main">Home</Link>
        <Link to="/newRecipe">New Recipe</Link>
        <Link to="/pantry">Pantry</Link>
        <Link to="/recipeInspiration">Recipe Inspiration</Link>
        <Link to="/">Log Out</Link>
      </header>
    )
  }
}