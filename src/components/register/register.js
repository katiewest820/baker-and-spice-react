import React from 'react';
import LandingPageHeader from '../landingPageHeader/landingPageHeader';
import './register.css';
export default class Register extends React.Component{

  render(){
    return(
      <div className="registerInputDiv">
        <label>First Name</label>
        <input type="text"/>
        <label>Last Name</label>
        <input type="text"/>
        <label>Username</label>
        <input type="text"/>
        <label>Password</label>
        <input type="password"/>
        <button>Submit</button>
      </div>
    )
  }
}