import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../actions/authActions';
import {connect} from 'react-redux';
import './header.css';

export class Header extends React.Component{

logUserOut(){
  console.log('yes')
  this.props.logout()
}
  render(){
    return(
      <header className="mainHeader">
        <Link to="/home">Home</Link>
        <Link to="/newRecipe">New Recipe</Link>
        <Link to="/pantry">Pantry</Link>
        <Link to="/apiRecipeSearch">More Recipes</Link>
        <Link to="/" onClick={this.logUserOut.bind(this)}>Log Out</Link>
      </header>
    )
  }
}

export const mapStateToProps = state => ({
  logout: state.authReducers.logoutRedirect
});

export default connect(mapStateToProps, {logout})(Header);