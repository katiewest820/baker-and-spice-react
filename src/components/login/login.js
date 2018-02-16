import React from 'react';
import LandingPageHeader from '../landingPageHeader/landingPageHeader';
import {reduxForm, Field, reset} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';
import {API_BASE_URL} from '../../config';
import {required, renderField} from '../../validators';
import './login.css';

export class Login extends React.Component{

  grabLoginValuesAndMakeAPICall(values){
    this.props.login(`${API_BASE_URL}/auth/login`, values);
    this.props.dispatch(reset('userLogin'));
  };

  render(){
    return(
      <div>
        <LandingPageHeader /> 
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
  };
};

const mapStateToProps = state => ({
  loginRedirect: state.authReducers.loginRedirect
});

Login = connect(mapStateToProps, {login})(Login);

export default reduxForm({
  form: 'userLogin' 
})(Login);