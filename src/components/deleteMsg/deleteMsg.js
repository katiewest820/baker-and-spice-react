import React from 'react';
import Header from '../header/header';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {API_BASE_URL} from '../../config';

export default class DeleteMsg extends React.Component{
  constructor(props){
    super(props)
    this.state={
      deleted: false
    }
  }

  apiCallForDelete(){
    console.log(this)
    let recipeSlug = this.props.match.params.recipeSlug;
    axios.delete(`${API_BASE_URL}/recipe/deleteOne/${recipeSlug}`)
    .then((response) => {
      console.log(response)
      this.setState({deleted: true})
      console.log(this.state)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  render(){
    return(
      <div>
        <Header />
        <div className="deleteMsg">
          <h1>Are you sure you want to delete this recipe?</h1>
          <Link to={"/recipeDetails/" + this.props.match.params.recipeSlug}><button>No</button></Link>
          <button onClick={this.apiCallForDelete.bind(this)}>Yes</button>
          {this.state.deleted && (<Redirect to="/home"/>)}
        </div>
      </div>
    )
  }
}
