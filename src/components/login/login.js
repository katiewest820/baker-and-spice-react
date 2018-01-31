import React from 'react';
import LandingPageHeader from '../landingPageHeader/landingPageHeader';
import './login.css';
export default class Login extends React.Component{

  render(){
    return(
      <div >
        <LandingPageHeader />
        <div className="loginDiv">
          <label>User Name</label>
          <input type="text"/>
          <label>password</label>
          <input type="text"/>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}