import React from 'react';
import { PulseLoader } from 'react-spinners';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';

export class LoginLoadingPage extends React.Component{

  render(){
    return(
      <div className="inspirationSearchDiv">
        <PulseLoader
          color={'#28b8be'}
          loading={true}
        />
        {localStorage.getItem('authToken') && this.props.loginRedirect && (
          <Redirect to="/home"/> )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loginRedirect: state.authReducers.loginRedirect
});

export default connect(mapStateToProps, {login})(LoginLoadingPage);

