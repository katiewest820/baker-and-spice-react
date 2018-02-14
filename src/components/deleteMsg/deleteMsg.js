import React from 'react';
import Header from '../header/header';
import {Link, Redirect} from 'react-router-dom';
//import axios from 'axios';
import {API_BASE_URL} from '../../config';
import {connect} from 'react-redux';
//import store from '../../store';
import {deleteRecipe} from '../../actions/recipeActions';
import './deleteMsg.css';

export class DeleteMsg extends React.Component{

  apiCallForDelete(){
    console.log(this)
    let recipeSlug = this.props.match.params.recipeSlug;
    this.props.deleteRecipe(`${API_BASE_URL}/recipe/deleteOne/${recipeSlug}`);
  }

  render(){
    return(
      <div>
        <Header />
        <div className="deleteMsg">
          <h1>Are you sure you want to delete this recipe?</h1>
          <div className="deleteMsgBtns">
            <Link to={"/recipeDetails/" + this.props.match.params.recipeSlug}><button>No</button></Link>
            <button onClick={this.apiCallForDelete.bind(this)}>Yes</button>
            {this.props.deleted && (<Redirect to="/home"/>)}
          </div>  
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  deleted: state.recipeReducers.deleted
});

export default connect(mapStateToProps, {deleteRecipe})(DeleteMsg);
