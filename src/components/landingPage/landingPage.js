import React from 'react';
//import {connect} from 'react-redux';
import LandingPageHeader from '../landingPageHeader/landingPageHeader';
import {Link} from 'react-router-dom';
//import Register from '../register/register';
import './landingPage.css';
export default class LandingPage extends React.Component{

  render(){
    return(
      <section className="landingPage">
        <LandingPageHeader />
        <div className="welcomeDiv">
          <h1>Welcome to Baker and Spice</h1>
          <p>Description Description Description Description Description Description 
          Description Description Description Description Description Description 
          Description Description Description Description Description Description 
          Description Description Description Description Description Description 
          </p>
        </div>
        <div className="aboutDiv">
          <h1>What is Baker and Spice</h1>
          <div className="aboutBlocks">
            <div>
              <h2>Create Recipes</h2>
              <span></span>
            </div>
            <div>
              <h2>Organize and Share</h2>
              <span></span>
            </div>
            <div>
              <h2>Get Inspiration</h2>
              <span></span>
            </div>
          </div>
        </div> 
        <div className="registerDiv">
          <h1>Try it out NOW!</h1>
          <p>Login with a Demo Account to see more<br/> TODO demo login</p>
          <Link to="/home"><button>Demo Account Login</button></Link>
        </div> 
      </section>
    )
  }
}

//export default connect()(LandingPage)