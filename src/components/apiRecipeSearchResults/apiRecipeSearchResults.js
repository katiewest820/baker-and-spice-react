import React from 'react';
import Header from '../header/header';
import {API_BASE_URL} from '../../config';
import {connect} from 'react-redux';
import {apiRecipeSearch} from '../../actions/apiRecipeSearchActions';
import ImageGallery from 'react-image-gallery';
import APIRecipeSearchForm from '../apiRecipeSearchForm/apiRecipeSearchForm';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';


export class APIRecipeSearchResults extends React.Component{

  componentDidMount(){
    console.log(this.props.match.params.searchTerm)
    if(this.props.match.params.searchTerm){
      this.sendSearchToAPI(this.props.match.params.searchTerm)
    }
  }

  sendSearchToAPI(value){
    console.log(value)
    this.props.apiRecipeSearch(`${API_BASE_URL}/apiRequest/search/${value}`);
  }


  onImageClick(item){
    return (
      <div className='image-gallery-image'>
        <img
          alt={item.description}
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
    if(this.props.errorMsg){
      return(
        <div>
          <Header />
          <APIRecipeSearchForm />
          <h2>{this.props.errorMsg}</h2>
        </div>
      )
    }
    else if(this.props.searchResults.length > 0){
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
          <APIRecipeSearchForm />
          <ImageGallery items={images} renderItem={this.onImageClick.bind(this)}/>
        </div>
      )
    }else{
      return(null)
    }
  }
}

const mapStateToProps = state => ({
  searchResults: state.apiRecipeSearchReducers.searchResults,
  errorMsg: state.apiRecipeSearchReducers.errorMsg
})

export default connect(mapStateToProps, {apiRecipeSearch})(APIRecipeSearchResults);