import React from 'react';
import LandingPageHeader from '../landingPageHeader/landingPageHeader';
//import {connect} from 'react-redux';
import './login.css';
export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userName: '',
      password: ''
    }
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  grabLoginValues(e){
    e.preventDefault()
    console.log(this)
    this.setState({userName: this.userNameInput.value});
    this.setState({password: this.passwordInput.value});
    
  }

  render(){
    return(
      <div >
        <LandingPageHeader />
        <div className="loginDiv">
          <label>User Name</label>
          <input ref={input => {this.userNameInput = input}} type="text" />
          <label>password</label>
          <input ref={input => {this.passwordInput = input}} type="text"/>
          <button onClick={this.grabLoginValues.bind(this)}>Submit</button>
        </div>
      </div>
    )
  }
}

//export default connect()(Login)