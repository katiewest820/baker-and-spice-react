import React from 'react';
import LandingPageHeader from '../landingPageHeader/landingPageHeader';
import {reduxForm, Field, reset} from 'redux-form';
import {connect} from 'react-redux';
import {register} from '../../actions/authActions';
import {Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../../config';
import './register.css';

export class Register extends React.Component{

  sendUserRegistrationDataToDB(values){
    console.log(values)
    this.props.register(`${API_BASE_URL}/auth/register`, values)
    //this.props.dispatch(reset('userRegister'))
  }

  render(){
    let registerErrorMsg = <p className="registerErrorMsg"></p>
    if(this.props.errorMessage.length > 0){
      registerErrorMsg = <p className="registerErrorMsg">{this.props.errorMessage}</p>
    }
    return(
      <div>
      <LandingPageHeader /> 
        {registerErrorMsg}
        <form className="registerInputDiv" onSubmit={this.props.handleSubmit(values => this.sendUserRegistrationDataToDB(values))}>
          <label>First Name</label>
          <Field 
            type="text"
            name="firstName"
            component="input"
          />
          <label>Last Name</label>
          <Field 
            type="text"
            name="lastName"
            component="input"
          />
          <label>Username</label>
          <Field 
            type="text"
            name="userName"
            component="input"
          />
          <label>Password</label>
          <Field 
            type="password"
            name="password"
            component="input"
          />
          <button type="submit">Submit</button>
          {this.props.loginRedirect && (<Redirect to="/home"/>)}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.authReducers.errorMsg,
  loginRedirect: state.authReducers.loginRedirect
});

Register = connect(mapStateToProps, {register})(Register)

export default reduxForm({
  form: 'userRegister' 
})(Register);