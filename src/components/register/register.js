import React from 'react';
import LandingPageHeader from '../landingPageHeader/landingPageHeader';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {register, login} from '../../actions/authActions';
import {Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../../config';
import {required, renderField} from '../../validators';
import './register.css';

export class Register extends React.Component{

  sendUserRegistrationDataToDB(values){
    console.log(values)
    let loginValues = {
      userName: values.userName,
      password: values.password
    }
    //Promise.all([
    this.props.register(`${API_BASE_URL}/auth/register`, values)
    .then(() => {
      this.props.login(`${API_BASE_URL}/auth/login`, loginValues)
    });
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
          <Field 
            label="First Name"
            type="text"
            name="firstName"
            component={renderField}
            validate={required}
          />
          <Field 
            label="Last Name"
            type="text"
            name="lastName"
            component={renderField}
            validate={required}
          />
          <Field 
            label="Username"
            type="text"
            name="userName"
            component={renderField}
            validate={required}
          />
          <Field 
            label="Password"
            type="password"
            name="password"
            component={renderField}
            validate={required}
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

Register = connect(mapStateToProps, {register, login})(Register)

export default reduxForm({
  form: 'userRegister' 
})(Register);