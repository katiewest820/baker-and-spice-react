import React from 'react';
import LandingPageHeader from '../landingPageHeader/landingPageHeader';
import {reduxForm, Field, reset} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login, logout} from '../../actions/authActions';
import {API_BASE_URL} from '../../config';
import {required, renderField} from '../../validators';

import './login.css';

export class Login extends React.Component{

  componentDidMount(){
    this.props.logout()
  }

  grabLoginValuesAndMakeAPICall(values){
    console.log(values)
    this.props.login(`${API_BASE_URL}/auth/login`, values)
    this.props.dispatch(reset('userLogin'))
  }

  render(){
    console.log(localStorage.getItem('userId'))
    let loginErrorMsg = <p className="loginErrorMsg"></p>
    if(this.props.errorMessage.length > 0){
      loginErrorMsg = <p className="loginErrorMsg">{this.props.errorMessage}</p>
    }
    return(
      <div >
        <LandingPageHeader /> 
        {loginErrorMsg}
        
        <form className="loginDiv" onSubmit={this.props.handleSubmit(values => this.grabLoginValuesAndMakeAPICall(values))}>
          <Field
            label="Username"
            type="text" 
            component={renderField}
            validate={required}
            name="userName"
          />
          <Field 
            label="Password"
            type="password"
            component={renderField}
            validate={required}
            name="password"
          />
          <button type="submit">Submit</button>
          {this.props.loginRedirect && (
            <Redirect to="/home"/>
          )}
        </form>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.authReducers.errorMsg,
  loginRedirect: state.authReducers.loginRedirect
})

Login = connect(mapStateToProps, {login, logout})(Login)

export default reduxForm({
  form: 'userLogin' 
})(Login);