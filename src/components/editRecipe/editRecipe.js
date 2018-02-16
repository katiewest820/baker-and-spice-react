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
    let userId = localStorage.getItem('userId');
    Promise.all([
      this.props.getOneRecipe(`${API_BASE_URL}/recipe/getRecipe/${userId}/${recipeSlug}`)
      ]).then((response) => {
        console.log(response)
        if(!response.error){
          this.props.newRecipeIngredientList(this.props.oneRecipe.recipeIngredients);
        };
      });
  };

  sendUpdatedRecipeToDB(values){
    let recipeSlug = values.recipeTitle.trim().toLowerCase().split(' ').join('-');
    let id = values._id;
    let data = new FormData();
    let imagedata = document.querySelector('input[type="file"]').files[0];
    if(imagedata){
      data.append('recipeImages', imagedata);
    }
    data.append('recipeTitle', values.recipeTitle.trim().toLowerCase());
    data.append('recipeIngredients', JSON.stringify(this.props.recipeIngredientList));
    data.append ('recipeInstructions', values.recipeInstructions);
    data.append('recipeSlug', recipeSlug);
    this.props.editRecipe(`${API_BASE_URL}/recipe/editRecipe/${id}`, data);
  };

  updateIngredient(value, name, index){
    let currentState = this.props.recipeIngredientList.slice();
    currentState[index] = Object.assign({}, currentState[index]);
    currentState[index][name] = value;
    this.props.editNewRecipeIngredientList(currentState);
  };

  deleteIngredientFromRecipe(value, name, index){
    let currentState = this.props.recipeIngredientList.slice();
    currentState.splice([index], 1);
    this.props.editNewRecipeIngredientList(currentState);
  };

  addIngredientToRecipe(values){
    let currentRecipes = this.props.recipeIngredientList;
    let newArr = currentRecipes.slice();
    newArr.push(values);
    this.props.newRecipeIngredientList(newArr);
    this.props.dispatch(reset('addIngredientToRecipe'));
  };

  render(){
    let recipeIngredients;
    if(this.props.recipeIngredientList){
      recipeIngredients = this.props.recipeIngredientList.map((item, index) => {
        return (
          <IngredientList key={index} index={index} name={item.name} quantity={item.quantity} updateIngredient={this.updateIngredient.bind(this)} deleteIngredientFromRecipe={this.deleteIngredientFromRecipe.bind(this)}/>
        )
      });
    };
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
              <label htmlFor="fileUpload" className="customFileUpload">Update Images</label>
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
  };
};

export const mapStateToProps = state => ({
  initialValues: state.recipeReducers.oneRecipe,
  oneRecipe: state.recipeReducers.oneRecipe,
  recipeIngredientList: state.recipeReducers.newRecipeIngredientList,
  recipeSlug: state.recipeReducers.recipeSlug
});

export default connect(mapStateToProps,
{getOneRecipe, editNewRecipeIngredientList, newRecipeIngredientList, editRecipe})(reduxForm({
  form: 'editRecipe', 
  enableReinitialize: true 
})(EditRecipe));