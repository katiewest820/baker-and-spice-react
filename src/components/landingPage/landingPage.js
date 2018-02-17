import React from 'react';
import LandingPageHeader from '../landingPageHeader/landingPageHeader';
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';
import {Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../../config';
import './landingPage.css';

export class LandingPage extends React.Component{

  demoLogin(){
    let values = {
      userName: 'dummyAccount',
      password: 'password123'
    };
    this.props.login(`${API_BASE_URL}/auth/login`, values);
  };

  render(){

    console.log(this.props.loginRedirect)
    return(
      <section className="landingPage">
        <LandingPageHeader />
        <div className="welcomeDiv">
          <h1>Welcome to Baker & Spice</h1>
          <p>Baker & Spice is a recipe building app that provides bakers with the tools they need to easily create new recipes and organize their kitchen.</p>
          <p>Users can create new recipes from scratch and inventory their pantry to see what items they need to begin making a recipe.</p>
          <p>Need help thinking up a great new recipe? No problem! Users will also be able to search by an ingredient type or recipe name if they need inspiration or help to build a recipe of their own.</p> 
        </div>
        <div className="aboutDiv">
          <h1>What is Baker & Spice?</h1>
          <div className="aboutBlocks">
            <div>
              <h2>Organize your Ingredient and Pantry Lists</h2>
              <span></span>
            </div>
            <div>
              <h2>Build Recipes from Scratch</h2>
              <span></span>
            </div>
            <div>
              <h2>Get Inspired by Searching for Recipe Ideas</h2>
              <span></span>
            </div>
          </div>
        </div> 
        <div className="registerDiv">
          <h1>Try it out Now!</h1>
          <p>Login with a Demo Account to see more</p>
          <button onClick={this.demoLogin.bind(this)}>Demo Account Login</button>
          {localStorage.getItem('authToken') && (
            <Redirect to="/home"/>
          )}
        </div> 
      </section>
    )
  };
};

const mapStateToProps = state => ({
  loginRedirect: state.authReducers.loginRedirect
});

export default connect(mapStateToProps, {login})(LandingPage);