import React from 'react';
import Header from '../header/header';
import IngredientInputs from '../ingredientInputs/ingredientInputs';
//import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../../config';
import {connect} from 'react-redux';
import {editNewRecipeIngredientList, submitNewRecipe} from '../../actions/recipeActions';
import store from '../../store';
import {reduxForm, Field, reset} from 'redux-form';
import './newRecipe.css';

class NewRecipe extends React.Component{

  updateIngredient(value, name, index){
    let currentState = store.getState(this.props.recipeReducers);
    let updatedArr = currentState.recipeReducers.newRecipeIngredientList;
    //updatedArr[index] = Object.assign({}, updatedArr[index])
    updatedArr[index][name] = value;
    //updatedArr[index][name] = value;
    this.props.editNewRecipeIngredientList(updatedArr)
  }

  deleteIngredientFromRecipe(value, name, index){
    console.log(value)
    console.log(name)
    console.log(index)
    let currentState = this.props.recipeIngredientList.slice();
    console.log(currentState)
    currentState.splice([index], 1)
    console.log(currentState)
    this.props.editNewRecipeIngredientList(currentState)
    
  }

  saveRecipeToDB(values){

    let data = new FormData();
    let imagedata = document.querySelector('input[type="file"]').files[0];

    data.append('recipeTitle', values.recipeTitle)
    data.append('recipeIngredients', JSON.stringify(this.props.recipeIngredientList))
    data.append ('recipeInstructions', values.recipeInstructions)
    data.append('recipeImages', imagedata)
    data.append('userId', localStorage.getItem('userId'))
    //data.append('token', localStorage.getItem('authToken'))
    // let newRecipeValues = {
    //   recipeTitle: values.recipeTitle,
    //   recipeIngredients: this.props.recipeIngredientList,
    //   recipeInstructions: values.recipeInstructions
    // }
    this.props.submitNewRecipe(`${API_BASE_URL}/recipe/newRecipe`, data)
    this.props.dispatch(reset('newRecipe'))
  }

  // handleChange(key, event){
  //   this.setState({[key]: event.target.value})
  // }


  render(){ 
    return(
      <div>
        <Header />
        <div className="newRecipeDiv">
          <h2>Create Your Recipe</h2>
          <IngredientInputs deleteIngredientFromRecipe={this.deleteIngredientFromRecipe.bind(this)} updateIngredient={this.updateIngredient.bind(this)}/>
          <form onSubmit={this.props.handleSubmit(values => this.saveRecipeToDB(values))}>
            <div>
              <label>Recipe Name</label>
              <Field 
                component="input" 
                name="recipeTitle" 
                type="text"
              />
            </div>
            <div className="imgInputDiv">
              <label>Images</label>
              <input 
                name="file" 
                type="file" 
              />
            </div>
            
            <div>
              <label>Instructions</label>
              <Field
                type="textarea"
                name="recipeInstructions"
                component="input"
                className="instructionsInput" 
              />
            </div> 
            <button type="submit">Submit Recipe</button>
            { this.props.recipeSlug && (
              <Redirect to={"/recipeDetails/" + this.props.recipeSlug} />
            )}
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipeIngredientList: state.recipeReducers.newRecipeIngredientList,
  recipeSlug: state.recipeReducers.recipeSlug
})

NewRecipe = connect(mapStateToProps, {editNewRecipeIngredientList, submitNewRecipe})(NewRecipe)

export default reduxForm({
  form: 'newRecipe' 
})(NewRecipe);