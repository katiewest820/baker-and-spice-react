import React from 'react';
import Header from '../header/header';
import {connect} from 'react-redux';
import {getOneRecipe, editNewRecipeIngredientList, newRecipeIngredientList, editRecipe} from '../../actions/recipeActions';
import {API_BASE_URL} from '../../config';
import store from '../../store';
import {reduxForm, Field} from 'redux-form';
import {Redirect} from 'react-router-dom';
import IngredientList from '../ingredientList/ingredientList';
import AddIngredientToRecipe from '../addIngredientToRecipe/addIngredientToRecipe';
import './editRecipe.css';

export class EditRecipe extends React.Component{

  componentDidMount(){
    let recipeSlug = this.props.match.params.recipeSlug;
    let userId = localStorage.getItem('userId')
    Promise.all([
      this.props.getOneRecipe(`${API_BASE_URL}/recipe/getRecipe/${userId}/${recipeSlug}`)
      ]).then(() => {
        console.log(this.props.oneRecipe.recipeIngredients)
        //for(let i = 0; i < this.props.oneRecipe.recipeIngredients.length; i++){
          this.props.newRecipeIngredientList(this.props.oneRecipe.recipeIngredients)
        //}
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
        <div className="editRecipeIngredients">
          <label>Update Ingredients</label>
          {recipeIngredients}
          <AddIngredientToRecipe onClick={this.addIngredientToRecipe.bind(this)}/>
        </div>
        <form className="editRecipeForm" onSubmit={this.props.handleSubmit(values => this.sendUpdatedRecipeToDB(values))}>
          <label>Update Recipe Title</label>
          <Field 
            type="text"
            name="recipeTitle"
            component="input"
          /> 
          <label>Images</label>
          <input 
            name="file" 
            type="file" 
          />
          <label>Update Recipe Instructions</label>  
          <Field 
            type="text"
            name="recipeInstructions"
            component="input"
          />
          <button type="submit">Submit Changes</button> 
          { this.props.recipeSlug && (
              <Redirect to={"/recipeDetails/" + this.props.recipeSlug} />
            )}
        </form>

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