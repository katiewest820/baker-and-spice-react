import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../actions/authActions';
import {connect} from 'react-redux';
import './header.css';

export class Header extends React.Component{

logUserOut(){
  this.props.dispatch(logout())
}
  render(){
    return(
      <header className="mainHeader">
        <Link to="/home">Home</Link>
        <Link to="/newRecipe">New Recipe</Link>
        <Link to="/pantry">Pantry</Link>
        <Link to="/recipeInspiration">Recipe Inspiration</Link>
        <Link to="/" onClick={this.logUserOut}>Log Out</Link>
      </header>
    )
  }
}

export default connect()(Header);