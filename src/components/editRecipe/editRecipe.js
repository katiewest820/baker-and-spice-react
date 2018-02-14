import React from 'react';
import Header from '../header/header';
import {connect} from 'react-redux';
import {getOneRecipe, editNewRecipeIngredientList, newRecipeIngredientList, editRecipe} from '../../actions/recipeActions';
import {API_BASE_URL} from '../../config';
import {reduxForm, Field, reset} from 'redux-form';
import {Redirect} from 'react-router-dom';
import IngredientList from '../ingredientList/ingredientList';
import AddIngredientToRecipe from '../addIngredientToRecipe/addIngredientToRecipe';
import {required, renderField, renderTextAreaField} from '../../validators';
import './editRecipe.css';

export class EditRecipe extends React.Component{

  componentDidMount(){
    let recipeSlug = this.props.match.params.recipeSlug;
    let userId = localStorage.getItem('userId')
    Promise.all([
      this.props.getOneRecipe(`${API_BASE_URL}/recipe/getRecipe/${userId}/${recipeSlug}`)
      ]).then(() => {
        console.log(this.props.oneRecipe.recipeIngredients)
        this.props.newRecipeIngredientList(this.props.oneRecipe.recipeIngredients)
      })
  }

  sendUpdatedRecipeToDB(values){
    console.log(values)
    console.log(this.props.recipeIngredientList)
    let recipeSlug = values.recipeTitle.trim().toLowerCase().split(' ').join('-');
    let id = values._id;
    console.log(recipeSlug)
    let data = new FormData();
    let imagedata = document.querySelector('input[type="file"]').files[0];
    if(imagedata){
      data.append('recipeImages', imagedata)
    }
    console.log(imagedata)
    data.append('recipeTitle', values.recipeTitle.trim().toLowerCase())
    data.append('recipeIngredients', JSON.stringify(this.props.recipeIngredientList))
    data.append ('recipeInstructions', values.recipeInstructions)
    data.append('recipeSlug', recipeSlug)
    this.props.editRecipe(`${API_BASE_URL}/recipe/editRecipe/${id}`, data)
  }

  updateIngredient(value, name, index){
    console.log(value)
    console.log(name)
    console.log(index)
    let currentState = this.props.recipeIngredientList.slice();
    console.log(currentState)
    currentState[index] = Object.assign({}, currentState[index])
    currentState[index][name] = value;
    console.log(currentState)
    this.props.editNewRecipeIngredientList(currentState)
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

  addIngredientToRecipe(values){
    console.log(values)
    let currentRecipes = this.props.recipeIngredientList
    console.log(currentRecipes)
    let newArr = currentRecipes.slice();
    newArr.push(values);
    console.log(currentRecipes)
    console.log(newArr)
    this.props.newRecipeIngredientList(newArr)
    this.props.dispatch(reset('addIngredientToRecipe'))
  }

  render(){
    let recipeIngredients
    if(this.props.recipeIngredientList){
      recipeIngredients = this.props.recipeIngredientList.map((item, index) => {
        return (
          <IngredientList key={index} index={index} name={item.name} quantity={item.quantity} updateIngredient={this.updateIngredient.bind(this)} deleteIngredientFromRecipe={this.deleteIngredientFromRecipe.bind(this)}/>
        )
      })
    }
    return(
      <div>
        <Header />
          <h2 className="newRecipeHeader">Update Recipe</h2>
          <div className="newRecipeDiv">
          <div className="ingredientInputDiv">
            <label>Update Ingredients</label>
            {recipeIngredients}
            <AddIngredientToRecipe onClick={this.addIngredientToRecipe.bind(this)}/>
          </div>
          <form onSubmit={this.props.handleSubmit(values => this.sendUpdatedRecipeToDB(values))}>
            <div className="recipeTitle">
              <Field 
                label="Update Title"
                type="text"
                name="recipeTitle"
                validate={required}
                component={renderField}
              /> 
            </div>
            <div className="imgInputDiv">
              <label for="fileUpload" className="customFileUpload">Update Images</label>
              <input 
                id="fileUpload"
                name="file" 
                type="file" 
              />
            </div>
            <div className="newRecipeInstructions"> 
              <Field 
                label="Update Instructions"
                type="text"
                name="recipeInstructions"
                validate={required}
                component={renderTextAreaField}
              />
            </div>
            <button className="submitNewRecipeButton" type="submit">Submit Changes</button> 
            { this.props.recipeSlug && (
                <Redirect to={"/recipeDetails/" + this.props.recipeSlug} />
              )}
          </form>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  initialValues: state.recipeReducers.oneRecipe,
  oneRecipe: state.recipeReducers.oneRecipe,
  recipeIngredientList: state.recipeReducers.newRecipeIngredientList,
  recipeSlug: state.recipeReducers.recipeSlug
});

export default connect(mapStateToProps,
{getOneRecipe, editNewRecipeIngredientList, newRecipeIngredientList, editRecipe})
  (reduxForm({
    form: 'editRecipe',
    enableReinitialize: true 
  })(EditRecipe));