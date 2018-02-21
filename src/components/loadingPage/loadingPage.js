import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import { PulseLoader } from 'react-spinners';
import {Redirect} from 'react-router-dom';

export class LoadingPage extends React.Component{

  render(){
    return(
      <div>
        <Header />
          <div className="inspirationSearchDiv">
            <PulseLoader
              color={'#28b8be'} 
              loading={true}
            />
            { this.props.recipeSlug !== 'pending' && this.props.recipeSlug !== '' && (
              <Redirect to={"/recipeDetails/" + this.props.recipeSlug} /> )}
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipeSlug: state.recipeReducers.recipeSlug
});

export default connect(mapStateToProps)(LoadingPage);

