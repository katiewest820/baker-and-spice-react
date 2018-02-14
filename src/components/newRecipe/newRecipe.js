import React from 'react';
import Header from '../header/header';
import IngredientInputs from '../ingredientInputs/ingredientInputs';
import {Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../../config';
import {connect} from 'react-redux';
import {editNewRecipeIngredientList, submitNewRecipe} from '../../actions/recipeActions';
import store from '../../store';
import {reduxForm, Field, reset} from 'redux-form';
import {required, renderField, renderTextAreaField} from '../../validators';
import './newRecipe.css';

class NewRecipe extends React.Component{

  updateIngredient(value, name, index){
    let currentState = store.getState(this.props.recipeReducers);
    let updatedArr = currentState.recipeReducers.newRecipeIngredientList;
    updatedArr[index][name] = value;
    this.props.editNewRecipeIngredientList(updatedArr)
  }

  deleteIngredientFromRecipe(value, name, index){
    console.log(value)
    let currentState = this.props.recipeIngredientList.slice();
    currentState.splice([index], 1)
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
    this.props.submitNewRecipe(`${API_BASE_URL}/recipe/newRecipe`, data)
    this.props.dispatch(reset('newRecipe'))
  }

  render(){ 
    return(
      <div>
        <Header />
        <h2 className="newRecipeHeader">Create Your Recipe</h2>
        <div className="newRecipeDiv">
          <IngredientInputs deleteIngredientFromRecipe={this.deleteIngredientFromRecipe.bind(this)} updateIngredient={this.updateIngredient.bind(this)}/>
          <form onSubmit={this.props.handleSubmit(values => this.saveRecipeToDB(values))}>
            <div className="recipeTitle">
              <Field 
                component={renderField} 
                name="recipeTitle" 
                type="text"
                label="Recipe Name"
                validate={required}
              />
            </div>
            <div className="imgInputDiv">
              <label for="fileUpload" className="customFileUpload">Images</label>
              <input 
                id="fileUpload"
                name="file" 
                type="file" 
              />
            </div>
            
            <div className="newRecipeInstructions">
              <Field
                type="textarea"
                name="recipeInstructions"
                component={renderTextAreaField}
                label="Instructions"
                validate={required}
              />
            </div> 
            <button className="submitNewRecipeButton" type="submit">Submit Recipe</button>
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