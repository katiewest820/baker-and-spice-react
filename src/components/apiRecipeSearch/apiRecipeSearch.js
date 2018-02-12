import React from 'react';
import Header from '../header/header';
import RecipeInspirationResults from '../recipeInspirationResults/recipeInspirationResults';
import axios from 'axios';
import {API_BASE_URL} from '../../config';
import {reduxForm, Field, reset} from 'redux-form';
import {connect} from 'react-redux';
import {apiRecipeSearch} from '../../actions/apiRecipeSearchActions';
import ImageGallery from 'react-image-gallery';
import './apiRecipeSearch.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
export class APIRecipeSearch extends React.Component{

  sendSearchToAPI(value){
    console.log(value)
    this.props.apiRecipeSearch(`${API_BASE_URL}/apiRequest/search/${value.searchTerm}`)
  }

  onImageClick(item){
    console.log(item)
    return (
      <div className='image-gallery-image'>
        <img
          src={item.original}
        />
        {
          item.description && item.link && 
          <a className='image-gallery-description hoverStyle' href={item.link}>
            {item.description}
          </a>   
        }
      </div>
    )
  }

  
  render(){
   let images = [];
    console.log(this.props.searchResults)
    if(this.props.searchResults.length > 0){
      for(let i = 0; i < this.props.searchResults.length; i++){
        images.push({
          original: this.props.searchResults[i].image_url,
          thumbnail: this.props.searchResults[i].image_url,
          description: this.props.searchResults[i].title,
          link: this.props.searchResults[i].source_url
        })
      }
      return(
        <div>
        <Header />
        <div className="inspirationSearchDiv">
          <h2>Need help getting started?</h2>
          <p>Search for recipes here! <br/> Enter an ingredient or recipe name in the field below</p>
          <form onSubmit={this.props.handleSubmit(value => this.sendSearchToAPI(value))}className="inspirationSearchInput">
            <Field 
              type="text"
              name="searchTerm"
              component="input"
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <ImageGallery items={images} renderItem={this.onImageClick.bind(this)}/>
      </div>
      )
    }else{
      return(
        <div>
          <Header />
          <div className="inspirationSearchDiv">
            <h2>Need help getting started?</h2>
            <p>Search for recipes here! <br/> Enter an ingredient or recipe name in the field below</p>
            <form onSubmit={this.props.handleSubmit(value => this.sendSearchToAPI(value))}className="inspirationSearchInput">
              <Field 
                type="text"
                name="searchTerm"
                component="input"
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  searchResults: state.apiRecipeSearchReducers.searchResults
})

APIRecipeSearch = connect(mapStateToProps, {apiRecipeSearch})(APIRecipeSearch)

export default reduxForm({
  form: 'apiRecipeSearch' 
})(APIRecipeSearch);