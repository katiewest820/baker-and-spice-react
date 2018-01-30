import React from 'react';
//import NewRecipe from '../newRecipe/newRecipe';
//import Pantry from '../pantry/pantry';
import {Link} from 'react-router-dom';
export default class Header extends React.Component{


  render(){
    return(
        <header>
          <Link to="/">Home</Link>
          <Link to="/newRecipe">New Recipe</Link>
          <Link to="/pantry">Pantry</Link>

        </header>
      )
  }
}