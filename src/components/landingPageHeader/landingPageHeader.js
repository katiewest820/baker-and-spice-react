import React from 'react';
import {Link} from 'react-router-dom';
import './landingPageHeader.css';

export default class LandingPageHeader extends React.Component{

  render(){
    return(
      <header className="landingPageHeader">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        
      </header>
    )
  }
}